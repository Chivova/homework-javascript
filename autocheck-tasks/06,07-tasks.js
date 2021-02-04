// Задание 6
/* Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.
Дополни функцию composeMessage(position) так, чтобы она возвращала строку в
формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.'
Позиция это значение параметра position - позиция элемента в массиве(на единицу больше чем индекс).
Дополни код так, чтобы в переменной messages, с помощью метода map,
получился массив сообщений о статусе заказов из массива orders. */
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position} в очереди.`;
}

const messages = orders.map((order, index) =>
  composeMessage.call(order, index + 1)
);

console.log(messages);

// Задание 7
// Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, index) =>
//   composeMessage.apply(order, [index + 1])
// );
