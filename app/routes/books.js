import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
    async model() {
        const api_url = 'https://anapioficeandfire.com/api/books';
        const response = await fetch(api_url);
        const json = await response.json();
        return json;
    }
}
