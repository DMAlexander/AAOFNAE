import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class BreadcrumbComponent extends Component {
    @service store;
    get books() {
        const books = this.store.peekAll('books');
        return books;
    }

    get characters() {
        const characters = this.store.peekAll('characters');
        return characters;
    }

    get houses() {
        const houses = this.store.peekAll('houses');
        return houses;
    }
}