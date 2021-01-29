// Пример 5 - напишите функцию
// makeCounter() - которая возвращает обьект счетчик
// у которого есть методы
// increment() - увеличить на 1
// decrement() - уменьшить на 1
// reset() - сбросить счетчик на 0
// show() - вывести текущее значение в консоль

const makeCounter = () => {
  let count = 0;
  return {
    increment() {
      count += 1;
    },
    decrement() {
      count -= 1;
    },
    reset() {
      count = 0;
    },
    show() {
      console.log(count);
    },
  };
};

const counter = makeCounter();
const counter2 = makeCounter();

console.log(counter === counter2); // false --> 2 разных обьекта

counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.show(); // 4
counter2.show(); // 0 после замыкания 4

counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();

counter.show(); // -2
counter2.show(); // 0 после замыкания -2
// если вынести переменную  count за пределы функции makeCounter()(в глобальное окружение) тогда после вызова counter2.show();
// в переменной count значение  будет такая же как и при вызове counter.show() один count на двоих ---> ЗАМЫКАНИЕ!!!!!
counter.reset();

counter.show(); // 0
counter2.show(); // 0 после замыкания 0
