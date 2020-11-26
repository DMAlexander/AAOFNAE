import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BreadcrumbController extends Controller {
    @tracked currentInfo = '';

    get getData() {
        debugger;
        return this.getDataModel();
    }

    /*
    @action
    async getDataModel() {
        debugger;
        const api_url = 'https://anapioficeandfire.com/api/' + this.currentInfo;
        let response = await fetch(api_url);
        const json = await response.json();
        return json;
    }
    */

    @action
    bookClicked(event) {
        debugger;
        event.preventDefault();
        console.log('AYYYYYY');  
        this.currentInfo = 'books';
        return this.getData;
    }

    @dropTask()
  * saveAndClose() {
    const modalId = this.modal.addModal('mobile/loading', {
      title: 'Saving Task',
    });
    yield this.args.task.saveRecord();
    // Removes close action from the stack since we need to save right away
    this.backStack.pop();
    this.args.onClose(this.args.task);
    this.modal.removeModal(modalId);
  }

    /*
    @action
    characterClicked() {
        return this.currentInfo = 'characters';
    }

    @action
    houseClicked() {
        return this.currentInfo = 'houses';
    }
    */
}
