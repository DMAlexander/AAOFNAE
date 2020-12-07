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
}