/* Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
Добавь классу Car две метода.

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

 */

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const firstCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
const secondCar = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
const thirdCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
/* В результате вызова new Car('Audi', 'Q3', 36000) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car('BMW', 'X5', 58900) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car('Nissan', 'Murano', 31700) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 } */

console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(Car.prototype.hasOwnProperty('changePrice'));
console.log(firstCar.getPrice());
firstCar.changePrice(35000);
console.log(firstCar.getPrice());

/* Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
Значение Car.prototype.getPrice это функция.
Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
Значение Car.prototype.changePrice это функция.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000)
и последующем вызове getPrice() вернет число 35000. */
