import { Component } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	constructor(
	) { }
	
	ngOnInit(){
	}

	logout() {
		localStorage.removeItem("user");
		//this.router.navigate(['Login']);
	}

}