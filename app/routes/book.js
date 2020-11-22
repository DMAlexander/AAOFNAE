import Route from '@ember/routing/route';

export default class BookRoute extends Route {
    async model() {
        const api_url = 'https://anapioficeandfire.com/api/books/1';
        const response = await fetch(api_url);
        const json = await response.json();
        return json;
    }
}
