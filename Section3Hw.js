const pizzaToppings = ["Pepperoni", "Sausage", "Bacon", "Ham"];
// 2
function greetingCustomer(){
console.log("Welcome to AlexPizza, Our toppings are:");
}
greetingCustomer();

for (let topping of pizzaToppings) {
console.log(topping)
};

// 3
function getPizzaOrder(size, crust, ...topping){
  console.log(`One ${size + crust} crust pizza with ${topping} coming up!`);

}

getPizzaOrder("medium ", "thick","Pepperoni"," Sausage"," Bacon"," Ham",'');


return getPizzaOrder()


//4
function preparePizza(medium, thick, ...topping) {
let Pizza = {
  size: medium [0]
  crust: thick [1]
  toppings: topping [2]
  };
  return console.log(Pizza);
  }
function preparePizza(Pizza ("medium", "thick", "Pepperoni", "Sausage", "Bacon", "Ham"));
