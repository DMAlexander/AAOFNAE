import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CharacterController extends Controller {
    get allegiances() {
        debugger;
        const api_url = this.model.allegiances;
        const response = fetch(api_url);
        const json = response.json();
        const name = json.name;
        return name;
    }
}
