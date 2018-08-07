import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

export interface Categorie {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
	/*Variables*/
	myBook:Book[] =[
		{title:'Hamlet', editingMode:false, dateAdd:Date.now(), author:'William Shakespeare', date: 1478496544151, summary:'The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (/ˈhæmlɪt/), is a tragedy written by William Shakespeare at an uncertain date between 1599 and 1602. Set in Denmark, the play dramatises the revenge Prince Hamlet is called to wreak upon his uncle, Claudius, by the ghost of Hamlet\'s father, King Hamlet. Claudius had murdered his own brother and seized the throne, also marrying his deceased brother\'s widow. ', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Edwin_Booth_Hamlet_1870.jpg'},
		{title:'Macbeth', editingMode:false, dateAdd:Date.now(), author:'William Shakespeare', date: 1478496544151, summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam rhoncus mauris vel faucibus. Sed sodales est vitae mollis volutpat. In hac habitasse platea dictumst. Quisque ut purus dapibus, hendrerit ligula ac, interdum massa. Nam varius justo a odio tincidunt, pellentesque pretium nisi tempor. Etiam eget pulvinar est. Ut posuere egestas molestie. Nulla ac nulla a turpis tincidunt mollis ac at turpis. Pellentesque venenatis neque a volutpat sollicitudin. Suspendisse dolor dolor, aliquet ac scelerisque sit amet, interdum sed nunc. Donec blandit eros in malesuada luctus. Nulla massa leo, pharetra congue felis vel, rutrum gravida neque. Duis at orci porta eros cursus finibus. Etiam condimentum felis a odio blandit semper. Phasellus lorem metus, varius at fringilla vitae, pharetra eget enim. ', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png/338px-Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png'},
		{title:'Othello', editingMode:false, dateAdd:Date.now(), author:'William Shakespeare', date: 1478496544151, summary:'', imageUrl: 'https://lunerontheatre.files.wordpress.com/2015/10/50274.jpg'},
		{title:'The Tragedy of Romeo and Juliet', editingMode:false, dateAdd:Date.now(), author:'William Shakespeare', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.imagesbn.com%2Fp%2F9781406823929_p0_v1_s260x420.jpg&f=1'},
		{title:'Harry Potter and the Philosopher\'s Stone', editingMode:false, dateAdd:Date.now(), author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-5eAxda5RqZ4%2FUF-y-WsLovI%2FAAAAAAAAJtI%2FM_ZgIaZgGR0%2Fs1600%2Fharry%2Bpotter.jpg&f=1'},
		{title:'Harry Potter and the Chamber of Secrets', editingMode:false, dateAdd:Date.now(), author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sBWzE5634JXkYOEF-wPUAAHaLH%26pid%3D15.1&f=1'},
		{title:'Harry Potter and the Prisoner of Azkaban', editingMode:false, dateAdd:Date.now(), author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w6Sl-8EKvIPzYp5SsH3H6AHaLL%26pid%3D15.1&f=1'},
		{title:'Harry Potter and the Goblet of Fire', editingMode:false, dateAdd:Date.now(), author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.teaDu2zk7hUR8PUCxJzADwHaKl%26pid%3D15.1&f=1'},
		{title:'Harry Potter and the Order of the Phoenix ', editingMode:false, dateAdd:Date.now(), author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fharrypotterfanzone.com%2Fwp-content%2F2009%2F06%2Footp-us-jacket-art.jpg&f=1'},
		{title:'Essential Angular for ASP.NET Core MVC', editingMode:false, dateAdd:Date.now(), author:'Adam Freeman', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41CV4NKFUBL._AC_US327_QL65_.jpg'},
		{title:'Mobile App Development with Ionic 2: Cross-Platform Apps with Ionic, Angular, and Cordova', editingMode:false, dateAdd:Date.now(), author:'Chris Griffith', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/518LpEFWNLL._AC_US327_QL65_.jpg'},
		{title:'Pro Angular', editingMode:false, dateAdd:Date.now(), author:'Adam Freeman', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41eKDhtSx+L._AC_US327_QL65_.jpg'},
		{title:'Full Stack AngularJS for Java Developers: Build a Full-Featured Web Application from Scratch Using AngularJS with Spring RESTful', editingMode:false, dateAdd:Date.now(), author:'Ravi Kant Soni', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41AYQnOFctL._AC_US327_QL65_.jpg'},
		{title:'Angular 5 Projects: Learn to Build Single Page Web Applications Using 70+ Projects', editingMode:false, dateAdd:Date.now(), author:'Mark Clow', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41wwgX3DWrL._AC_US327_QL65_.jpg'}
	];
	categories: Categorie[] = [
    {value: 'date-0', viewValue: 'Date'},
    {value: 'name-1', viewValue: 'Name'},
    {value: 'author-3', viewValue: 'Author'}
  ];
	book: Book = {title:'', editingMode:false, dateAdd:Date.now(), author:'', date: 0, summary:'', imageUrl: ''};
	books:Book[] = [];
	isAdmin=false;
	int nbrProPage=4;
	int page = this.nbrProPage;
	int nbrBooks=this.myBook.length;
	int nbrTotPage=0;
	int nbrPageCurrent=1;
	isAddingAbook=false;
	ErrorMessage="Please enter a value";
	
	/*fonctions*/
	constructor() { 
		this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
		this.initBook();
		this.calculateNbrPage();
	}
	initBook(){
		for(let i=0;i<this.myBook.length;i++){
			this.books.push(this.myBook[i]);
		}
	}	
	calculateNbrPage(){
		if(this.nbrBooks%this.nbrProPage===0){
			this.nbrTotPage=this.nbrBooks/this.nbrProPage;
		}else{
			this.nbrTotPage=parseInt(this.nbrBooks/this.nbrProPage)+1;
		}
	}
	isOk(i){
		let a=this.nbrPageCurrent*this.nbrProPage;
		let b = a-this.nbrProPage;
		return((i>=b) && (i<a));
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
		return this.page<this.nbrBooks;
	}
	
	deleteElement(index){
		if (index !== -1) {
			this.books.splice(index, 1);
			this.nbrBooks--;
			
		}
		
		
		
		
	}

	/*Use for adding or not a new book*/
	Save(){
		if(this.book.title && this.book.author){
			this.nbrBooks++;
			this.calculateNbrPage();
			this.isAddingAbook=false;
			this.books.push(this.book);
			this.book = {title:'', editingMode:false, dateAdd:0, author:'', date: 0, summary:'', imageUrl: ''};
		}
	}
	Cancel(){
		this.isAddingAbook=false;
		this.book = {title:'', editingMode:false, author:'', dateAdd:0, date: 0, summary:'', imageUrl: ''};
	}

}
