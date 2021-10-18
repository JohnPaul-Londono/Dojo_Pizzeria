function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;

}

var p1 = pizzaOven("deep dish", "traditional", ["mozarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("handtossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("crushed by car", "extra dry", ["horsemilk", "extracreamy"], ["water", "earth", "fire", "air"]);
console.log(p3);

var p4 = pizzaOven ("garlic", "bbq", ["mozarella", "extra"], ["chicken", "red onions", "parsley"]);
console.log(p4);

// function pizzaOven(crustType, sauceType, cheeses, toppings){
//     var pizza=[
//     crustType= ["bread", "garlic"],
//     sauceType = ["bbq", "marinara"],
//     cheeses = ["mozarella", "feta"],
//     toppings = ["red onions", "bacon"]
//     ];
//     return pizza;
//     var myAnswer = Math.floor(Math.random() * pizzaOven.length);
// }

//     console.log(pizzaOven[myAnswer]);

// var myAnswer = Math.floor(Math.random() * display.length(this.crustType, this.sauceType, this.cheeses, this.toppings));
//     console.log(randomPizza[myAnswer]);