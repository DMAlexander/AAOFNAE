import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HomeRoute extends Route {
    @service store;
    @tracked newObject = {};

    /*
    async model() {
        let api_url = 'https://anapioficeandfire.com/api/';
        let response = await fetch(api_url);
        const json = await response.json();
        for (const [key, value] of Object.entries(json)) {
            console.log(`${key}: ${value}`);
            //value is our new array
            const api_url = value;
            const response = await fetch(api_url);
            const newarr = await response.json();
            this.returnObject[key] = newarr;

            for (const [key2, value2] of Object.entries(newarr)) {
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
                    }).catch(function (error) {
                        console.log(error);
                    });
                    //TODO: Make API Call for each character to get its data
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
                        const api_url = value3; //TODO: Since we can have multiple books, we need another loop...
                        const response = await fetch(api_url);
                        const bookVals = await response.json();
                        books[key3] = bookVals;
                    }
                    const allegiances = value2.allegiances;
                    for (const [key4, value4] of Object.entries(allegiances)) {
                        const api_url = value4; //TODO: Since we can have multiple books, we need another loop...
                        const response = await fetch(api_url);
                        const allegiancesVals = await response.json();
                        allegiances[key4] = allegiancesVals;
                    }
                }

                if (key === 'houses') {
                    const swornMembers = value2.swornMembers;
                    for (const [key5, value5] of Object.entries(swornMembers)) {
                        const api_url = value5; //TODO: Since we can have multiple books, we need another loop...
                        const response = await fetch(api_url);
                        const memberVals = await response.json();
                        swornMembers[key5] = memberVals;
                    }
                    const currentLord = value2.currentLord;
                    if(currentLord) {
                        const api_url = currentLord; //TODO: Since we can have multiple books, we need another loop...
                        const response = await fetch(api_url);
                        const lordVals = await response.json();
                        value2.currentLord = lordVals;
                    }
                }
            }
        }
        debugger;
   //     this.store.push({json});
     return this.returnObject; // overlord: "https://anapioficeandfire.com/api/houses/285"
    }

    afterModel() {
        debugger;
        const newData = this.returnObject;
        this.returnObject.id = '1';
        debugger;
        this.store.push({
            newData
        });
        debugger;
    }
    */
    async model() {
        // lets just concentrate on getting books for now. We'll get other stuff later when this works.
    //    let api_url = 'https://anapioficeandfire.com/api/books';
    //    let response = await fetch(api_url);
    //    const json = await response.json();
    //    this.newObject = json;
        //lets make an object. Should look like this:
        /*
        data: {
            // primary data for single record of type `Person`
            id: '1',
            type: 'person',
            attributes: {
            firstName: 'Daniel',
            lastName: 'Kmak'
        }
    }
*/
/*
        for (const [key, value] of Object.entries(json)) {
            // need to get info for each record
            console.log(`${key}: ${value}`);
            debugger;
            this.store.createRecord('book', {
                ...value,
            });
        }
        return this.newObject;
        */
        let api_url = 'https://anapioficeandfire.com/api/';
        let response = await fetch(api_url);
        const json = await response.json();
        for (const [key, value] of Object.entries(json)) {
            console.log(`${key}: ${value}`);
            //value is our new array
            const api_url = value;
            const response = await fetch(api_url);
            const newarr = await response.json();
            this.newObject = newarr;
      //      this.store.createRecord(key, {
      //          ...newarr,
      //      });
      //      return newarr;
            for (const [key2, value2] of Object.entries(newarr)) {
                console.log(`${key2}: ${value2}`);
                this.store.createRecord(key, value2);
            }
        }
        return this.newObject;
    }

//    afterModel() {
     //   debugger;
    //    this.store.createRecord('book', {
    //        ...this.newObject,
    //    });
        /*
        const newData = this.newObject;
        debugger;
        this.store.push({
            data: newData
        });
        debugger;
        */
//    }
}
