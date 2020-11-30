import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HouseRoute extends Route {
    @service store;
    async model() {
        const data = this.store.peekAll('houses');
        return data;
    }
}
