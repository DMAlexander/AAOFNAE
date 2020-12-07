import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookController extends Controller {
   @service store;

   get id() {
      return this.model.id;
   }

   get name() {
      return this.model.name;
   }

   get isbn() {
      return this.model.isbn || 'Unknown';
   }

   get numberOfPages() {
      return this.model.numberOfPages || 'Unknown';
   }

   get released() {
      let date = this.model?.released;
      if (!date) {
         return 'Unknown';
      }
      let index = date.indexOf('T');
      return date.slice(0, index);
   }

   get characters() {
      const allCharacters = this.store.peekAll('characters');
      const characterObject = this.model.characters;
      const filteredStuff = allCharacters.filter((result) => characterObject?.includes(result.url));
      console.log(filteredStuff);
      return filteredStuff;
   }

   get rating() {
      const thumbsUp = document.getElementById("thumbsUp");
      const thumbsDown = document.getElementById("thumbsDown");
      if (this.model?.bookRating === 'liked') {
         thumbsUp.style.color = "blue";
         thumbsDown.style.color = "black";
      }
      else if (this.model?.bookRating === 'disliked') {
         thumbsUp.style.color = "black";
         thumbsDown.style.color = "blue";
      }
      else {
         thumbsUp.style.color = "black";
         thumbsDown.style.color = "black";
      }
      return this.model?.bookRating;
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
      record.bookRating = rating;
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
      record.bookRating = rating;
   }
}
