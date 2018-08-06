import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	constructor( private router: Router) { 
		if (localStorage.getItem("user") === null){
			this.router.navigateByUrl('/login');
		}
	}
	logout() {
		localStorage.removeItem("user");
		this.router.navigateByUrl('/login');
	}
	addBook(){
		
	}
}
