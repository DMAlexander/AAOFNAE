import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BooksController extends Controller {
    @service store;
    @action
    save() {
        let name = document.getElementById('bcomment').value;
        this.store.createRecord('books', name);
    }
}