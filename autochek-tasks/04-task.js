/* Выполни рефакторинг функции - конструктора Car так, чтобы она принимала один
параметр - объект со свойсвами brand, model и price.
Деструктуризируй объект в сигнатуре(подписи) функции. */

function Car({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const firstCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
const secondCar = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
const thirdCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);

/* В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 })
получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })
получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }. */
