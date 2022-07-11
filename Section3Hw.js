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
let cookingPizza = preparePizza(pizzaOrder)


//5
function servePizza(pizza) {
  let orderUp = `Ordre} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderUp += `${topping}, `;
  }
console.log(`${orderUp}. Enjoy!`);

return pizza;
}
servePizza(cookingPizza);

 //6
greetingCustomer();

const customerPizza = servePizza(preparePizza(getPizzaOrder("medium", "thick", "Pepperoni", "Sausage", "Bacon", "Ham")));

console.log(customerPizza)
