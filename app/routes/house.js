import Route from '@ember/routing/route';

export default class HouseRoute extends Route {
    async model() {
        debugger;
        const api_url = 'https://anapioficeandfire.com/api/houses/1';
        const response = await fetch(api_url);
        const json = await response.json();
        return json;
    }
}
