/*
Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса,
для чтения и изменения этого свойства.

getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
*/

class Car {
  constructor({ brand, model, price }) {
    this._brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this._brand;
  }

  changeBrand(newBrand) {
    this._brand = newBrand;
  }
}

const firstCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
const secondCar = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
const thirdCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);

console.log(firstCar.brand);
console.log(firstCar.getBrand());
firstCar.changeBrand('Honda');

/*
вызов new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { model: 'Q3', price: 36000 }.
вызов new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { model: 'X5', price: 58900 }.
вызов new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { model: 'Murano', price: 31700 }.
У экземпляра нет публичного свойства brand.
Метод getBrand() возвращает значение приватного свойства brand.
Метод changeBrand('Honda') изменяет значение приватного свойства brand на 'Honda'.
*/
