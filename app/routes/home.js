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

            for (const [key, value] of Object.entries(newarr)) {
                console.log(`${key}: ${value}`);
                //value is our new array
                 // If name doesn't exist, replace empty string with character alias
                if (!value.name) {
                    value.name = value.aliases;
                }
            }
        }
        return json; // overlord: "https://anapioficeandfire.com/api/houses/285"
    }
}
