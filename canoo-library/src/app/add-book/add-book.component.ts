import { Component } from '@angular/core';
import { Book } from '../book';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

	book: Book = {title:'', editingMode:false, author:'', date: 0, summary:'', imageUrl: ''};
	
  constructor() {}
	
  ErrorMessage="Please enter a value";
  
  AddBook(){
	  //if valid
	  //this.users.push(new User("Bob", "", "Developer", "100", "github.com"); )
	  /*if(this.book.title && this.book.author){
		  
	  }*/
  }

}
export class InputOverviewExample {}