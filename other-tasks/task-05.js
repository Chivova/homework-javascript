// Пример 5 - напишите функцию
// которая принимает информацию о пользователе
// и выводит ее в консоль

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  obj: { a: 1, b: 2 },
};

const userInfo = function () {
  const { name, age, hobby, premium, obj: { a, b } } = user;
  return console.log(`name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}, a: ${a}, b: ${b}`);
};


userInfo(user);

// или

const getUserInfo = ({ name, age, hobby, premium, obj: { a, b } }) => {
  const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}, a: ${a}, b: ${b}`;

  console.log(message);
};

userInfo(user);