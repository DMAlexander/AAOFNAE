import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CharacterController extends Controller {
    @service store;
    @tracked characterObject;
 
    get findRecord() {
       const data = this.store.peekRecord('characters', this.model.id);
       console.log(data.get('id'));
       this.characterObject = data;
       return this.characterObject;
    }

    get id() {
       return this.characterObject?.id || 'Unknown';
    }

    get name() {
        return this.characterObject?.name || 'Unknown';
    }

    get culture() {
        return this.characterObject?.culture || 'Unknown';
    }

    get born() {
        return this.characterObject?.born || 'Unknown';
    }

    get died() {
        return this.characterObject?.died || 'Unknown';
    }

    get aliases() {
        return this.characterObject?.aliases || 'Unknown';
    }

    get allegiances() {
        return this.characterObject?.allegiances || 'Unknown';
    }

    get book() {
        return this.characterObject?.books || 'Unknown';
    }

    get rating() {
        const thumbsUp = document.getElementById("thumbsUp");
        const thumbsDown = document.getElementById("thumbsDown");
        if (this.characterObject.characterRating === 'liked') {
           thumbsUp.style.color = "blue";
           thumbsDown.style.color = "black";
        }
        else if (this.characterObject.characterRating === 'disliked') {
           thumbsUp.style.color = "black";
           thumbsDown.style.color = "blue";
        }
        else {
           thumbsUp.style.color = "black";
           thumbsDown.style.color = "black";
        }
        return this.characterObject?.characterRating;
     }
  
     @action
     thumbsUpClicked(){
        const thumbsUp = document.getElementById("thumbsUp");
        const thumbsDown = document.getElementById("thumbsDown");
        let rating = null;
        if(thumbsUp.style.color === "black") {
           thumbsUp.style.color = "blue";
           thumbsDown.style.color = "black";
           rating = 'liked';
        }
        else if(thumbsUp.style.color === "blue") {
           thumbsUp.style.color = "black";
           thumbsDown.style.color = "black";
           rating = null;
        }
        const record = this.characterObject;
        record.id = this.model.id;
        record.characterRating = rating;
     }
      
     @action
     thumbsDownClicked(){
        const thumbsUp = document.getElementById("thumbsUp");
        const thumbsDown = document.getElementById("thumbsDown");
        let rating = null;
        if(thumbsDown.style.color === "black") {
           thumbsDown.style.color = "blue";
           thumbsUp.style.color = "black";
           rating = 'disliked';
        } else if(thumbsDown.style.color === "blue") {
           thumbsDown.style.color = "black";
           thumbsUp.style.color = "black";
           rating = null;
        }
        const record = this.characterObject;
        record.id = this.model.id;
        record.characterRating = rating;
     }
}
