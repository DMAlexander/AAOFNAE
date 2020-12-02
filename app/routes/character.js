import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharacterRoute extends Route {
    @service store;

    async model() {
        const data = this.store.peekAll('characters');
        return data;
    }
}
