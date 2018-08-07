import {Injectable} from '@angular/core';

export class Book {
	constructor(
		public title : string,
		public editingMode: boolean,
		public author : string,
		public date : number,
		public summary : string,
		public imageUrl : string,
		public dateAdd : boolean
		){}
}