import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { AddBookComponent } from './add-book/add-book.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BooksComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatFormFieldModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
