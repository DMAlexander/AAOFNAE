import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HouseRoute extends Route {
    @service store;

    async model(params) {
        const {
            houses_id,
        } = params;
        const data = this.store.peekRecord('characters', houses_id);
        return data;
    }
}