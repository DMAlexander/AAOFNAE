import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BooksController extends Controller {
    @service store;
    @action
    save() {
        debugger;
        let name = document.getElementById('bcomment').value;
        this.store.createRecord('books', name);
    }

    @action
    myFunctionOne(){
        if(document.getElementById("yo").style.color === "black") {
            document.getElementById("yo").style.color = "blue";
            document.getElementById("yo2").style.color = "black";
        }
        else if(document.getElementById("yo").style.color === "blue") {
            document.getElementById("yo").style.color = "black";
            document.getElementById("yo2").style.color = "black";
        }
    }
    
    @action
    myFunctionTwo(){
        if(document.getElementById("yo2").style.color === "black") {
            document.getElementById("yo2").style.color = "blue";
            document.getElementById("yo").style.color = "black";
        } else if(document.getElementById("yo2").style.color === "blue") {
            document.getElementById("yo2").style.color = "black";
            document.getElementById("yo").style.color = "black";
        }
    }
}