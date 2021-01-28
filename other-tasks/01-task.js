// Пример 1 - Коллбек функции
// Напишите две функции:

// letMeSeeYourName(callback) - спрашивает имя пользователя
// через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя
// и логирующий в консоль строку "Привет" + name

const letMeSeeYourName = (callback)  => {
  const name = prompt(`What is your name?`);

  callback(name);
};
// const greet = (name) => {
//   console.log(`Hello ${name}`);
// };
const greet = (name) => console.log(`Hello ${name}`);
;


letMeSeeYourName(greet);

// Анонимная функция --> функция без имени
letMeSeeYourName (name => console.log(`Hi ${name}!!!!`))