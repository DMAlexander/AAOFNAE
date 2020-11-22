import Route from '@ember/routing/route';

export default class HousesRoute extends Route {
    async model() {
        const api_url = 'https://anapioficeandfire.com/api/houses';
        const response = await fetch(api_url);
        const json = await response.json();
        return json;
    }
}
