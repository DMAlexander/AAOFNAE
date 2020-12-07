import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HouseRoute extends Route {
    @service store;

    model(params) {
        const {
            houses_id,
        } = params;
        const data = this.store.peekRecord('houses', houses_id);
        return data;
    }
}