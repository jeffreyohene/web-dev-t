const menu = {
  _meal: '', // Private property to store the name of the meal
  _price: 0, // Private property to store the price of the meal

  set meal(mealToCheck) {
    // Setter method for the meal property
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck; // Assign the provided value to the _meal property
    } else {
      console.log('Invalid meal'); // Log an error message if the value is not a string
    }
  },

  set price(priceToCheck) {
    // Setter method for the price property
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck; // Assign the provided value to the _price property
    } else {
      console.log('You must enter a price'); // Log an error message if the value is not a number
    }
  },

  get todaysSpecial() {
    // Getter method to retrieve the values of meal and price
    if (this._meal && this._price) {
      return `Plat de jour est ${this._meal} pour €${this._price}!`; // Return the Today's Special message if both meal and price are set
    } else {
      return 'Meal or price was not set correctly!'; // Return an error message if either meal or price is not set
    }
  }
};

// Setting the values using the setter methods
menu.meal = 'Pasta'; // Set the meal property to 'Pasta'
menu.price = 5; // Set the price property to 5

// console.log(`Plat de jour est ${menu._meal} pour €${menu._price}!`);

console.log(menu.todaysSpecial); // Log the value returned by the todaysSpecial getter method
