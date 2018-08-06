import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
	books=BOOKS;
	isAdmin=false;
	int nbrProPage=4;
	int page = this.nbrProPage;
	int nbrBooks=this.books.length;
	int nbrTotPage=0;
	int nbrPageCurrent=1;
	isOk(i){
		return(i>=(this.page-this.nbrProPage) && i<this.page);
	}
	goNextPage(){
		if(this.nbrPageCurrent<this.nbrTotPage){
			this.nbrPageCurrent++;
		}
		this.page+=this.nbrProPage;
		if(this.nbrBooks<this.page){
			this.page=this.nbrBooks;
		}
	}
	
	goPrevPage(){
		if(this.nbrPageCurrent>1){
			this.nbrPageCurrent--;
		}
		this.page-=this.nbrProPage;
		if(this.page<this.nbrProPage){
			this.page=this.nbrProPage;
		}
	}
	
	hadPrev(){
		return this.page>this.nbrProPage;
	}
	hadNext(){
		return this.page<this.nbrBooks-1;
	}
	
	deleteElement(index){
		if (index !== -1) {
			this.books.splice(index, 1);
		}
	}
	
  constructor() { 
	if(this.nbrBooks%this.nbrProPage===0){
		this.nbrTotPage=this.nbrBooks/this.nbrProPage;
	}else{
		this.nbrTotPage=parseInt(this.nbrBooks/this.nbrProPage)+1;
	}
	this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
	
  }



}
