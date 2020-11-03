'use strict'

console.log("\n----------- 1 task -----------\n");
						
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount){
  	this.name = name;
  	this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;			
}
	
	fix() {
		let nextState = this.state * 1.5;
		this.state = nextState;
	}
	
  set state(value){
		if (value < 0) {
	  	this._state = 0;
		} else if (value > 100) {
	  	this._state = 100;
		} else {
	  	this._state = value;
		}
  }
	
  get state() {
		return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
  }
  type = "magazine";
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
	this.author = author;
  }
  type = "book";
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
  }
  type = "novel";
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
  }
  type = "fantastic";
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
  }
  type = "detective";
}

console.log("\n----------- 2 task -----------\n");

class Library {
  constructor(name){
		this.name = name;
		this.books = [];
  }
	
  addBook(book) {
		let state = book.state;
		if (state > 30) {
	  	this.books.push(book);
		}
  }
	
  set books(value){
		this._books = value;
  }
	
  get books() {
		return this._books;
  }
	
  findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++){
			for (type in this.books[i]){
				let bookCase = this.books[i];
				let valueBook = bookCase[type];

			if (valueBook == value) { 
		  	return bookCase;
			}
	  }
	}
	return null;
  }
	
  giveBookByName(bookName) {
		let giveBook;
		
		for (let i = 0; i < this.books.length; i++){
	  	for (name in this.books[i]){
				let bookCase = this.books[i];
				let valueBook = bookCase[name];

				if (valueBook == bookName) {
		  		giveBook = bookCase;
		  		this.books.splice(i, 1);
		  		return giveBook;
				}
	  	}
		}
		
		return null;
  }	
}