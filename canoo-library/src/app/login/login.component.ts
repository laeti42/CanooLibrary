import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user : User = {
		username : '',
		password : '',
		isAdmin : false
	};
	users: User[] = [
		{username:'admin', password:'1234', isAdmin:true},
		{username:'test', password:'1234', isAdmin:false}	
	];
	
	errorMessage : string ='';
	constructor() { }
	login() {
		var myUser = this.users.find(u => u.username === this.user.username);
		if (myUser && myUser.password === this.user.password){
			this.errorMessage='ok';
			localStorage.setItem('user', JSON.stringify(myUser));
		}else{
			this.errorMessage='nok'
		}
    }

	
  ngOnInit() {
  }
}