import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
	books: Book[] = [
		{title:'Hamlet', author:'William Shakespeare', date: 1478496544151, summary:'The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (/ˈhæmlɪt/), is a tragedy written by William Shakespeare at an uncertain date between 1599 and 1602. Set in Denmark, the play dramatises the revenge Prince Hamlet is called to wreak upon his uncle, Claudius, by the ghost of Hamlet\'s father, King Hamlet. Claudius had murdered his own brother and seized the throne, also marrying his deceased brother\'s widow. ', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Edwin_Booth_Hamlet_1870.jpg'},
		{title:'Macbeth', author:'William Shakespeare', date: 1478496544151, summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam rhoncus mauris vel faucibus. Sed sodales est vitae mollis volutpat. In hac habitasse platea dictumst. Quisque ut purus dapibus, hendrerit ligula ac, interdum massa. Nam varius justo a odio tincidunt, pellentesque pretium nisi tempor. Etiam eget pulvinar est. Ut posuere egestas molestie. Nulla ac nulla a turpis tincidunt mollis ac at turpis. Pellentesque venenatis neque a volutpat sollicitudin. Suspendisse dolor dolor, aliquet ac scelerisque sit amet, interdum sed nunc. Donec blandit eros in malesuada luctus. Nulla massa leo, pharetra congue felis vel, rutrum gravida neque. Duis at orci porta eros cursus finibus. Etiam condimentum felis a odio blandit semper. Phasellus lorem metus, varius at fringilla vitae, pharetra eget enim. ', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png/338px-Thomas_Keene_in_Macbeth_1884_Wikipedia_crop.png'},
		{title:'Othello', author:'William Shakespeare', date: 1478496544151, summary:'', imageUrl: 'https://lunerontheatre.files.wordpress.com/2015/10/50274.jpg'},
		{title:'The Tragedy of Romeo and Juliet', author:'William Shakespeare', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.imagesbn.com%2Fp%2F9781406823929_p0_v1_s260x420.jpg&f=1'},
		{title:'Harry Potter and the Philosopher\'s Stone', author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-5eAxda5RqZ4%2FUF-y-WsLovI%2FAAAAAAAAJtI%2FM_ZgIaZgGR0%2Fs1600%2Fharry%2Bpotter.jpg&f=1'},
		{title:'Harry Potter and the Chamber of Secrets', author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sBWzE5634JXkYOEF-wPUAAHaLH%26pid%3D15.1&f=1'},
		{title:'Harry Potter and the Prisoner of Azkaban', author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w6Sl-8EKvIPzYp5SsH3H6AHaLL%26pid%3D15.1&f=1'},
		{title:'Harry Potter and the Goblet of Fire', author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.teaDu2zk7hUR8PUCxJzADwHaKl%26pid%3D15.1&f=1'},
		{title:'Harry Potter and the Order of the Phoenix ', author:'J. K. Rowling', date: 1478496544151, summary:'', imageUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fharrypotterfanzone.com%2Fwp-content%2F2009%2F06%2Footp-us-jacket-art.jpg&f=1'},
		{title:'Essential Angular for ASP.NET Core MVC', author:'Adam Freeman', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41CV4NKFUBL._AC_US327_QL65_.jpg'},
		{title:'Mobile App Development with Ionic 2: Cross-Platform Apps with Ionic, Angular, and Cordova', author:'Chris Griffith', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/518LpEFWNLL._AC_US327_QL65_.jpg'},
		{title:'Pro Angular', author:'Adam Freeman', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41eKDhtSx+L._AC_US327_QL65_.jpg'},
		{title:'Full Stack AngularJS for Java Developers: Build a Full-Featured Web Application from Scratch Using AngularJS with Spring RESTful', author:'Ravi Kant Soni', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41AYQnOFctL._AC_US327_QL65_.jpg'},
		{title:'Angular 5 Projects: Learn to Build Single Page Web Applications Using 70+ Projects', author:'Mark Clow', date: 1478496544151, summary:'', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41wwgX3DWrL._AC_US327_QL65_.jpg'}
	];
	

	
	nbrProPage=4;
	page =this.nbrProPage;
	nbrBooks=this.books.length;
	nbrTotPage=0;
	nbrPageCurrent=1;
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

  constructor() { 
	if(this.nbrBooks%this.nbrProPage===0){
		this.nbrTotPage=this.nbrBooks/this.nbrProPage;
	}else{
		this.nbrTotPage=parseInt(this.nbrBooks/this.nbrProPage)+1;
	}
	
  }

  ngOnInit() {
  }

}