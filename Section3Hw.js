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


















function example(param1, param2, ...rest){
let array = [param1, param2, rest]
return array;

}

example('Long', 'Short', 'fat', 'dog', 'cat');


function examObj(param1, param2, ...param3){
let object = {
  ObjA: param1[0],
  ObjB: param2[1],
  objC: param3[2],
};
return console.log `I found a cool ${object.objB}`;
}
