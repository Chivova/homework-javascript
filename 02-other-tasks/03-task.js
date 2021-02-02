// Пример 3 - bind
// Напишите функцию, которая принимает число - степень и возвращает функцию, которая принимает число и
// возводит его в переданную ранее степень

// const makePower = function (num) {
//   const power = function (n) {
//     return Math.pow(num, n);
//   };

//   return power;
// };

// Запись через bind
const makePower = (num) => Math.pow.bind(null, num); // контекст тут не нужен, поэтому можно передать что угодно, например null

// Math.pow(num, n) => num ** n;
const makeTwo = makePower(2); // --> степень, будет в num
// разшифровка
// const num = 2;
// const power = Math.pow.bind(null, 2);
// this внутри power - null
// num => 2 ** num; // 2 запомнилось благодаря bind

// Число которое возводим
console.log(makeTwo(2));
console.log(makeTwo(3));
console.log(makeTwo(4));

const makeTree = makePower(3); // --> степень, будет в num

console.log(makeTree(2));
console.log(makeTree(3));
console.log(makeTree(4));
