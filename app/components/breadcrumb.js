import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BreadcrumbComponent extends Component {
    @tracked currentInfo = 'books';
    @tracked data = {};

    @action
    bookClicked(event) {
        debugger;
        event.preventDefault();
        console.log('AYYYYYY');  
        this.currentInfo = 'books';
        return this.getData();
    }

    @action
    async getData() {
        debugger;
        const api_url = 'https://anapioficeandfire.com/api/' + this.currentInfo;
        let response = await fetch(api_url);
        const json = await response.json();
        this.data = json;
        console.log('this.data:', this.data);
  }

    @action
    characterClicked() {
        this.currentInfo = 'characters';
        this.getData();
    }

    @action
    houseClicked() {
        this.currentInfo = 'houses';
        this.getData();
    }
}
