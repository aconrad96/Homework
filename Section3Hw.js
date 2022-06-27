// 1
const pizzaToppings = ["Pepperoni", "Sausage", "Bacon", "Ham"];
// 2
function greetingCustomer() {
console.log("Welcome to AlexPizza, Our toppings are:");
}
greetingCustomer();

for (let topping of pizzaToppings) {
console.log(topping)
}

// 3
function getPizzaOrder(size, crust, ...topping){
  console.log("One " + size + crust + "crust pizza with " + topping + "coming up! ");
let order = [size, crust, topping]
return order;
}

getPizzaOrder("medium", "thick", "Pepperoni", "Sausage", "Bacon", "Ham");

for (let order of getPizzaOrder)
console.log(getPizzaOrder);

// 4
function preparePizza(){


}

preparePizza();
// 5
function servePizza()


// 6
