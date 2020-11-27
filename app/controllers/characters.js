import Controller from '@ember/controller';

export default class CharactersController extends Controller {
    get characters() {
        return this.model.characters || 'Unknown'
    }
}
