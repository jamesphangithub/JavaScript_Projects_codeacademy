//James Phan
//Building a library with parent class media and child classes books and movies


//Media Parent Class
class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title () {
    return this._title;
  }

  get isCheckedOut () {
    return this._isCheckedOut;
  }

  get ratings () {
    return this._ratings;
  }

  toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating () {
    return (this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue)) / (this._ratings.length);
  }

  addRating (rating) {
    this._ratings.push(rating);
  }
  
  set isCheckedOut (status) {
    this._isCheckedOut = status;
  }

}


//Child Book Class
class Book extends Media {
  constructor (title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;    
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

//Child Movie Class
class Movie extends Media {
  constructor (title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

//book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything);
console.log(historyOfEverything.getAverageRating());


//movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed);
console.log(speed.getAverageRating());
