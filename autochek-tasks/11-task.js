/*
Задание 1

Выполни рефакторинг класса Car.
Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
Добавь сеттеру price проверку передаваемого значения параметра newPrice.
Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

class Car {

  static MAX_PRICE = 10000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }

}
*/

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) return;
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

/*
Задание 2

Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля.
Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.

class Car {
  static #MAX_PRICE = 50000;

  constructor({ price }) {
    this.price = price;
  }
}
*/

class Car {
  static #MAX_PRICE = 50000;

  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return `Внимание! Цена превышает допустимую.`;
    }
    return `Всё хорошо, цена в порядке.`;
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
