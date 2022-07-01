// 1
const pizzaToppings = ["Pepperoni", "Sausage", "Bacon", "Ham"];
// 2
function greetingCustomer() {
let greeting = `Welcome to AlexPizza, our toppings are: `;

for (let topping of pizzaToppings) {
  greeting += `${topping}, `;
}
console.log(greeting);
}
greetingCustomer();
// 3
function getPizzaOrder(size, crust, ...toppings) {
let order = `One ${size} ${crust} crust pizza with `;
for (let topping of toppings) {
  order += `${topping}, `;
}
  console.log(`${order}... Coming up!`);

return [size, crust, toppings];
}
let pizzaOrder = getPizzaOrder("medium", "thick", "Pepperoni", "Sausage", "Bacon", "Ham");

//4
function preparePizza([orderSize, orderCrust, orderTopping]) {
  console.log("...Cooking Pizza...");

  return {

  size: orderSize,
  crust: orderCrust,
  toppings: orderTopping
  };

}
let cookingPizza = preparePizza([orderSize, orderCrust, orderTopping])


//5
function servePizza(pizza) {
  let orderUp = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderUp += `${topping}, `;
  }
console.log(`${orderUp}. Enjoy!`);

return pizza;
}
servePizza



//need to iterate through array
//js does not know that ${}+${} is a template literal
// definently overthinking
// realized was overlooking the assign variable
//orange braces confuses me I am assuming because it is inside of the scope
//on number 3 end
//not using operation correctly
//+= concatenate
// #3 return Params
//use += with template literals and for let
//#4 could have pizza or anything in the array
//for of loop iterates through an array
