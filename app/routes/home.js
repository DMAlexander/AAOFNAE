import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
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
            json[key] = newarr;

            for (const [key2, value2] of Object.entries(newarr)) {
                console.log(`${key2}: ${value2}`);
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
            }
        }
        return json; // overlord: "https://anapioficeandfire.com/api/houses/285"
    }
}
