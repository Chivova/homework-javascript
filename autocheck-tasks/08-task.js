/* Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов.
Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии
с привязанным контекстом к соответствующим объектам. */

/* const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}

const pizzaPalaceComposer = composeMessage;
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage;
const burgerShackMessage = burgerShackComposer('Поли'); */

const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
console.log(pizzaPalaceMessage);

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');
console.log(burgerShackMessage);
