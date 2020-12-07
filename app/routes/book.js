import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookRoute extends Route {
    @service store;
    model(params) {
        const {
            books_id,
        } = params;
        return this.store.peekRecord('books', books_id);
    }
}