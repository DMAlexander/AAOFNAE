import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HouseController extends Controller {
    @service store;
    @tracked houseObject;
    get findRecord() {
       const data = this.store.peekRecord('houses', this.model.id);
       console.log(data.get('id'));
       this.houseObject = data;
       return this.houseObject;
    }

    get name() {
        return this.houseObject?.name || 'Unknown';
    }

    get region() {
        return this.houseObject?.culture || 'Unknown';
    }

    get coatOfArms() {
        return this.houseObject?.born || 'Unknown';
    }

    get words() {
        return this.houseObject?.died || 'Unknown';
    }

    get titles() {
        return this.houseObject?.aliases || 'Unknown';
    }

    get founded() {
        return this.houseObject?.allegiances || 'Unknown';
    }

    get diedOut() {
        return this.houseObject?.books || 'Unknown';
    }

    get currentLordName() {
        return this.houseObject?.currentLord.name || 'Unknown';
    }

    get swornMembers() {
        return this.houseObject?.swornMembers || 'Unknown';
    }

    get rating() {
        const thumbsUp = document.getElementById("thumbsUp");
        const thumbsDown = document.getElementById("thumbsDown");
        if (this.houseObject.houseRating === 'liked') {
           thumbsUp.style.color = "blue";
           thumbsDown.style.color = "black";
        }
        else if (this.houseObject.houseRating === 'disliked') {
           thumbsUp.style.color = "black";
           thumbsDown.style.color = "blue";
        }
        else {
           thumbsUp.style.color = "black";
           thumbsDown.style.color = "black";
        }
        return this.houseObject?.houseRating;
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
        const record = this.houseObject;
        record.id = this.model.id;
        record.houseRating = rating;
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
        const record = this.houseObject;
        record.id = this.model.id;
        record.houseRating = rating;
     }
}
