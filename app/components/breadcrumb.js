import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class BreadcrumbComponent extends Component {
    @service store;
    @service router;

    get routeName() {
        const routeName = this.router.currentRouteName;
        return routeName;
    }

    get inHome() {
        const inHome = this.router.currentRouteName === 'home' ? true : false;
        return inHome;
    }

    //Get all record data so we can iterate through it
    get recordData() {
        if(this.router.currentURL.includes('/books')) {
            return this.store.peekAll('books');
        }
        if(this.router.currentURL.includes('/characters')) {
           return this.store.peekAll('characters');
        }
        if(this.router.currentURL.includes('/houses')) {
            return this.store.peekAll('houses');
        }
        return '';
    }

    get recordName() {
        if(!this.args.baseRoute) {
            return this.args.record?.name || this.args.record?.aliases;
        }
        return 'Record';
    }

    get showBooks() {
        if(this.router.currentURL.includes('/books')) {
            return true;
        }
        return null;
    }

    get showCharacters() {
        if(this.router.currentURL.includes('/characters')) {
            return true;
        }
        return null;
    }

    get showHouses() {
        if(this.router.currentURL.includes('/houses')) {
            return true;
        }
        return null;
    }
}