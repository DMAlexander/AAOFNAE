import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HousesRoute extends Route {
    @service store;
    async model(params) {
        const data = this.store.peekAll('houses');
        return data;
    }
}