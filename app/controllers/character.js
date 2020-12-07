import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CharacterController extends Controller {
    @service store;
 
    get id() {
       return this.model?.id || 'Unknown';
    }

    get name() {
        return this.model?.name || 'Unknown';
    }

    get culture() {
        return this.model?.culture || 'Unknown';
    }

    get born() {
        return this.model?.born || 'Unknown';
    }

    get died() {
        return this.model?.died || 'Unknown';
    }

    get aliases() {
        return this.model?.aliases || 'Unknown';
    }

    get allegiances() {
      const allhouses = this.store.peekAll('houses');
      const allegiancesObject = this.model.allegiances;
      const filteredStuff = allhouses.filter((result) => allegiancesObject?.includes(result.url));
      console.log(filteredStuff);
      return filteredStuff;
    }

    get book() {
      const allBooks = this.store.peekAll('books');
      const booksObject = this.model.books;
      const filteredStuff = allBooks.filter((result) => booksObject?.includes(result.url));
      console.log(filteredStuff);
      return filteredStuff;
    }

    get rating() {
      const thumbsUp = document.getElementById("thumbsUp");
      const thumbsDown = document.getElementById("thumbsDown");
      if (this.model?.characterRating === 'liked') {
         thumbsUp.style.color = "blue";
         thumbsDown.style.color = "black";
      }
      else if (this.model?.characterRating === 'disliked') {
         thumbsUp.style.color = "black";
         thumbsDown.style.color = "blue";
      }
      else {
         thumbsUp.style.color = "black";
         thumbsDown.style.color = "black";
      }
      return this.model?.characterRating;
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
      record.characterRating = rating;
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
      record.characterRating = rating;
   }
}
