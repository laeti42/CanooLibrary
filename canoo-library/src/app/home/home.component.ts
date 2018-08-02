import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	constructor( private router: Router
	) { }
	
	ngOnInit(){
		if (localStorage.getItem("user") === null){
			this.logout();
		}
	}

	logout() {
		localStorage.removeItem("user");
		this.router.navigateByUrl('/login');
	}

}
