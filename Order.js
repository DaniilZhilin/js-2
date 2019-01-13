//main class
Food = function(price, calories) {
    this.price = price;
    this.calories = calories;
}

//Hamburger constructor
function Hamburger(size, stuffing) { 
    Food.call(this);
    this.size = size;
    this.stuffing = stuffing;

    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
 } 

 //Hamburger inheritence from Food
 Hamburger.prototype = Object.create(Food.prototype);
 Hamburger.prototype.constructor = Hamburger;

//Salad constructor
function Salad(saladType) {
    Food.call(this);
    this.type = saladType.type;

    this.price = saladType.price;
    this.calories = saladType.calories;
}

//Salad inheritence from Food
Salad.prototype = Object.create(Food.prototype);
Salad.prototype.constructor = Salad;

//Drink constructor
function Drink(drinkType) {
    Food.call(this);
    this.type = drinkType;

    this.price = drinkType.price;
    this.calories = drinkType.calories;
}

//Drink inheritence from Food
Drink.prototype = Object.create(Food.prototype);
Drink.prototype.constructor = Drink;


    //Menu constants:
//Hamburger consts:
Hamburger.SIZE_SMALL = 
{
    size: "small",
    price: 50,
    calories: 20
}

Hamburger.SIZE_LARGE = {
    size: 'large',
    price: 100,
    calories: 40
}
Hamburger.STUFFING_CHEESE = {
    stuffing: 'cheese',
    price: 10,
    calories: 20
}
Hamburger.STUFFING_SALAD = {
    stuffing: 'salad',
    price: 20,
    calories:  5
}
Hamburger.STUFFING_POTATO = {
    stuffing: 'potato',
    price: 15,
    calories: 10
}

//Sakad consts:
Salad.CEASAR = {
    type: 'ceasar',
    price: 100,
    calories: 20
}

Salad.OLIVIER = 
{
    type: "olivier",
    price: 100,
    calories: 20
}

//Drink consts:
Drink.COLA = {
    type: "cola",
    price: 50,
    calories: 40
}

Drink.COFFE = {
    type: 'coffe',
    price: 80,
    calories: 20
}

/*Function for getting Order
    Set objects in getOrder function

    Example:

    ham1 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
    drink1 = new Drink(Drink.COFFE);
    sal1 = new Salad(Salad.CEASAR);

    getOrder(ham1, drink1, sal1);

    Amount of food(objects) in one order not limited
    Delete some stuff from order is not difficult. Just remove it from function brackets :)
*/
function getOrder(/*set objects here*/) {
    var totalPrice = 0;
    var totalCalories = 0;

    for (let i = 0; i < arguments.length; i++)
    {
        totalPrice = totalPrice + arguments[i].price;
        totalCalories = totalCalories + arguments[i].calories;
    }

    console.log("С вашего счета снято " + totalPrice);
    console.log("Вы наели на " + totalCalories + " калорий");
}

//For testing use example in comment higher or create your own objects and set its into the function getOrder()