import Controller from '@ember/controller';

export default class CharacterController extends Controller {
    get name() {
        return this.model.name || 'Unknown';
    }

    get culture() {
        debugger;
        return this.model.culture || 'Unknown';
    }

    get born() {
        return this.model.born || 'Unknown';
    }

    get died() {
        return this.model.died || 'Unknown';
    }

    get aliases() {
        return this.model.aliases || 'Unknown';
    }

    get allegiances() {
        return this.model.allegiances || 'Unknown';
    }

    get book() {
        return this.model.books || 'Unknown';
    }
}
