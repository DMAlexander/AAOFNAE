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
            const api_url = value + '?pagesize=100';
            const response = await fetch(api_url);
            const newarr = await response.json();
            this.newObject[key] = newarr;

            for (const [key2, value2] of Object.entries(newarr)) {
                const id = parseInt(key2);
                value2.id = id+1;
                console.log(`${key2}: ${value2}`);
                if (key === 'books') {
                    let charactersList = value2.characters;
                    charactersList = charactersList.slice(0, 50);
                    Promise.all(charactersList.map(characterUrl =>
                        fetch(characterUrl)
                    )).then(function (responses) {
                        return Promise.all(responses.map(function (response) {
                            return response.json();
                        }));
                    }).then(data => {
                        value2.characters = data;
                        console.log('our data: ', data);
                        this.store.createRecord(key, value2);
                    }).catch(function (error) {
                        console.log(error);
                    }); 
                }
                //value is our new array
                // If name doesn't exist, replace empty string with character alias
                if (key === 'characters') {
                    if (!value2.name) {
                        value2.name = value2.aliases;
                    }
                    // If in character, should find book info
                    const books = value2.books;
                    for (const [key3, value3] of Object.entries(books)) {
                        const api_url = value3;
                        const response = await fetch(api_url);
                        const bookVals = await response.json();
                        books[key3] = bookVals;
                    }
                    const allegiances = value2.allegiances;
                    for (const [key4, value4] of Object.entries(allegiances)) {
                        const api_url = value4;
                        const response = await fetch(api_url);
                        const allegiancesVals = await response.json();
                        allegiances[key4] = allegiancesVals;
                    }
                    this.store.createRecord(key, value2);
                }

                if (key === 'houses') {
                    const swornMembers = value2.swornMembers;
                    for (const [key5, value5] of Object.entries(swornMembers)) {
                        const api_url = value5;
                        const response = await fetch(api_url);
                        const memberVals = await response.json();
                        swornMembers[key5] = memberVals;
                    }
                    const currentLord = value2.currentLord;
                    if (currentLord) {
                        const api_url = currentLord;
                        const response = await fetch(api_url);
                        const lordVals = await response.json();
                        value2.currentLord = lordVals;
                    }
                    this.store.createRecord(key, value2);
                }
                console.log(`${key2}: ${value2}`);
            }
        }
        return this.newObject;
    }
}
