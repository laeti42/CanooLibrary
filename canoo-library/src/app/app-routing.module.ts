import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes : Routes =[
	{path: '', redirectTo: '/home', pathMatch: 'full' },
	{path : 'home', component : HomeComponent},
	{path : 'login', component : LoginComponent},
	{path : 'addBook', component : AddBookComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }