import Route from '@ember/routing/route';

export default class CharactersRoute extends Route {
    async model() {
        const api_url = 'https://anapioficeandfire.com/api/characters?&pageSize=100';
        const response = await fetch(api_url);
        const json = await response.json();
        return json;
    }
}
