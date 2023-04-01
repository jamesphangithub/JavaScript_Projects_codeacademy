//James Phan
//logging meals and price into restaurant menu

//menu objective with meal and price keys
//todaysSpecial will output the menu if initialised properly
const menu = {
    _meal : '',
    _price : 0,
  
    set meal (mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.log('Invalid input for meal!');
      }
    } ,
  
    set price (priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.log('Invalid input for price!');
      }
    } ,
  
    get todaysSpecial () {
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} at $${this._price}.`
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
  
  }
  
  menu.meal = 'Pad Thai Chicken';
  menu.price = 17.90;
  console.log(menu);
  console.log(menu.todaysSpecial);
  