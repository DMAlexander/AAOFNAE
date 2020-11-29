import Route from '@ember/routing/route';

export default class HouseRoute extends Route {
    async model() {
        const data = this.store.peekAll('houses');
        return data;
    }
}
