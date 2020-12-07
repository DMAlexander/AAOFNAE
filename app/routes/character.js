import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharacterRoute extends Route {
    @service store;

    model(params) {
        const {
            characters_id,
        } = params;
        const data = this.store.peekRecord('characters', characters_id);
        return data;
    }
}
