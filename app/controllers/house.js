import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HouseController extends Controller {
    @service store;

    get name() {
        return this.model?.name || 'Unknown';
    }

    get region() {
        return this.model?.region || 'Unknown';
    }

    get coatOfArms() {
        return this.model?.coatOfArms || 'Unknown';
    }

    get words() {
        return this.model?.words || 'Unknown';
    }

    get titles() {
        return this.model?.titles || 'Unknown';
    }

    get founded() {
        return this.model?.founded || 'Unknown';
    }

    get diedOut() {
        return this.model?.diedOut || 'Unknown';
    }

    get currentLord() {
        const allCharacters = this.store.peekAll('characters');
        const houseObject = this.model?.currentLord?.name;
        const filteredStuff = allCharacters.filter((result) => houseObject?.includes(result.url));
        console.log(filteredStuff);
        return filteredStuff;
    }

    get swornMembers() {
        const allCharacters = this.store.peekAll('characters');
        const swornMembersObject = this.model?.swornMembers;
        const filteredStuff = allCharacters.filter((result) => swornMembersObject?.includes(result.url));
        console.log(filteredStuff);
        return filteredStuff;
    }

    get allegiances() {
        const allhouses = this.store.peekAll('houses');
        const allegiancesObject = this.model.allegiances;
        const filteredStuff = allhouses.filter((result) => allegiancesObject?.includes(result.url));
        console.log(filteredStuff);
        return filteredStuff;
    }

    get rating() {
        const thumbsUp = document.getElementById("thumbsUp");
        const thumbsDown = document.getElementById("thumbsDown");
        if (this.model.houseRating === 'liked') {
            thumbsUp.style.color = "blue";
            thumbsDown.style.color = "black";
        }
        else if (this.model.houseRating === 'disliked') {
            thumbsUp.style.color = "black";
            thumbsDown.style.color = "blue";
        }
        else {
            thumbsUp.style.color = "black";
            thumbsDown.style.color = "black";
        }
        return this.model?.houseRating;
    }

    @action
    thumbsUpClicked() {
        const thumbsUp = document.getElementById("thumbsUp");
        const thumbsDown = document.getElementById("thumbsDown");
        let rating = null;
        if (thumbsUp.style.color === "black") {
            thumbsUp.style.color = "blue";
            thumbsDown.style.color = "black";
            rating = 'liked';
        }
        else if (thumbsUp.style.color === "blue") {
            thumbsUp.style.color = "black";
            thumbsDown.style.color = "black";
            rating = null;
        }
        const record = this.model;
        record.houseRating = rating;
    }

    @action
    thumbsDownClicked() {
        const thumbsUp = document.getElementById("thumbsUp");
        const thumbsDown = document.getElementById("thumbsDown");
        let rating = null;
        if (thumbsDown.style.color === "black") {
            thumbsDown.style.color = "blue";
            thumbsUp.style.color = "black";
            rating = 'disliked';
        } else if (thumbsDown.style.color === "blue") {
            thumbsDown.style.color = "black";
            thumbsUp.style.color = "black";
            rating = null;
        }
        const record = this.model;
        record.houseRating = rating;
    }
}
