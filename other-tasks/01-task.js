// Пример 1 - Коллбек функции
// Напишите две функции:

// letMeSeeYourName(callback) - спрашивает имя пользователя
// через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя
// и логирующий в консоль строку "Привет" + name

const letMeSeeYourName = function (callback) {
  const name = prompt(`What your name?`);
  callback(name);
};
const greet = function (name) {
  console.log(`Hello ${name}`);
};

letMeSeeYourName(greet);
