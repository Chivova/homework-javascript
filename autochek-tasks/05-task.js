/* Добавь в свойство prototype функции-конструктора Car два метода:

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
Значение Car.prototype.getPrice это функция.
Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
Значение Car.prototype.changePrice это функция.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000)
и последующем вызове getPrice() вернет число 35000. */

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(Car.prototype.hasOwnProperty('changePrice'));
console.log(myCar.getPrice());
myCar.changePrice(35000);
console.log(myCar.getPrice());
console.log(myCar);
