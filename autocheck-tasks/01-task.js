/* Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback)
колбэк - функцию и возвращала ее вызов.Функция deliverPizza или makePizza будет передаваться как колбэк
и ожидать аргументом имя готовой доставляемой пиццы. */

function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Роял гранд', makePizza)); //'Пицца Роял гранд готовится, ожидайте...'.
console.log(makeMessage('Ультрасыр', deliverPizza)); //'Доставляем пиццу Ультрасыр.'.
