import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-root',
  //directives: [LoginComponent, ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault:true },
    { path: '/login', name: 'Login', component: LoginComponent }
])*/
export class AppComponent {
  title = 'Canoo Library';
}
