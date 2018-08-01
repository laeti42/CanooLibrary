import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : new User = {
	username : '',
	password : '',
	isAdmin : false
  };


  constructor() { }

  ngOnInit() {
  }
}
