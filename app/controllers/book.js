import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookController extends Controller {
   @service store;
   @tracked bookObject;

   get findRecord() {
      const data = this.store.peekRecord('books', this.model.id);
      console.log(data.get('id'));
      this.bookObject = data;
      return this.bookObject;
   }

   get id() {
      return this.bookObject?.id || 'Unknown';
   }

   get name() {
      return this.bookObject?.name || 'Unknown';
   }

   get isbn() {
      return this.bookObject?.isbn || 'Unknown';
   }

   get numberOfPages() {
      return this.bookObject?.numberOfPages || 'Unknown';
   }

   get released() {
      return this.bookObject?.released || 'Unknown';
   }

   get comments() {
      return this.bookObject?.comments || 'Unknown';
   }

   get characters() {
      return this.bookObject?.characters || 'Unknown';
   }

   get rating() {
      const thumbsUp = document.getElementById("thumbsUp");
      const thumbsDown = document.getElementById("thumbsDown");
      if (this.bookObject.bookRating === 'liked') {
         thumbsUp.style.color = "blue";
         thumbsDown.style.color = "black";
      }
      else if (this.bookObject.bookRating === 'disliked') {
         thumbsUp.style.color = "black";
         thumbsDown.style.color = "blue";
      }
      else {
         thumbsUp.style.color = "black";
         thumbsDown.style.color = "black";
      }
      return this.bookObject?.bookRating;
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
      const record = this.bookObject;
      record.id = this.model.id;
      record.bookRating = rating;
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
      const record = this.bookObject;
      record.id = this.model.id;
      record.bookRating = rating;
   }
}