import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HomeRoute extends Route {
    @service store;
    @tracked newObject = {};

    async model() {

        let books = this.store.peekAll('books');
        let characters = this.store.peekAll('characters');
        let houses = this.store.peekAll('houses');

        if (books.content.length != 0 || characters.content.length != 0 || houses.content.length != 0) {
            return;
        }

        let api_url = 'https://anapioficeandfire.com/api/';
        let response = await fetch(api_url);
        const json = await response.json();
        for (const [key, value] of Object.entries(json)) {
            console.log(`${key}: ${value}`);
            //value is our new array
            let numPages = 0;
            if(key==='books') {
                numPages = 1;
            }
            if (key==='characters') {
                numPages = 43
            }
            if(key==='houses') {
                numPages = 9
            }

            let i = 1;
            while (i <= numPages) {
                const api_url = value + '?pagesize=50&page=' + i;
                const response = await fetch(api_url);
                const newarr = await response.json();
                this.newObject[key] = newarr;

                for (const [key2, value2] of Object.entries(newarr)) {
                    const size = ((i-1)*50) + parseInt(key2);
                    let id = parseInt(size)+1;
                    value2['id'] = id;
                    this.store.createRecord(key, value2);
                }
                i++;
            }
        }
        return this.newObject;
    }
}
