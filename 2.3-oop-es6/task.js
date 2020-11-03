'use strict'

console.log("\n----------- 1 task -----------\n\n");
						
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