// Пример 3 - Сортировка сложных типов
// Выполнить сортировку массива объектов:

// по возрастанию и убыванию значения свойства price.
// по имени в алфавитном и обратном алфавитном порядке.
// через callback

const items = [
  { name: 'SAMSUNG', price: 15000 },
  { name: 'LG', price: 9000 },
  { name: 'ASUS', price: 27000 },
  { name: 'DELL', price: 12000 },
  { name: 'BENQ', price: 7000 },
];

// // По свойству price
// const itemsByAscendingPrice = [...items].sort(
//   (prevItem, nextItem) => prevItem.price - nextItem.price
// );
// console.table(itemsByAscendingPrice);

// const itemsByDescendingPrice = [...items].sort(
//   (prevItem, nextItem) => nextItem.price - prevItem.price
// );
// console.table(itemsByDescendingPrice);

// // По свойству name
// const itemsByAscendingName = [...items].sort((prevItem, nextItem) =>
//   prevItem.name > nextItem.name ? 1 : -1
// );
// console.table(itemsByAscendingName);

// const itemsByDescendingName = [...items].sort((prevItem, nextItem) =>
//   nextItem.name > prevItem.name ? 1 : -1
// );
// console.table(itemsByDescendingName);

// через callback
const priceAscCompare = (prev, next) => prev.price - next.price;
const priceDescCompare = (prev, next) => next.price - prev.price;
const nameAscCompare = (prev, next) => (prev.name > next.name ? 1 : -1);
const nameDescCompare = (prev, next) => (next.name > prev.name ? 1 : -1);

const itemsByAscendingPrice = [...items].sort(priceAscCompare);
console.table(itemsByAscendingPrice);

const itemsByDescendingPrice = [...items].sort(priceDescCompare);
console.table(itemsByDescendingPrice);

const itemsByAscendingName = [...items].sort(nameAscCompare);
console.table(itemsByAscendingName);

const itemsByDescendingName = [...items].sort(nameDescCompare);
console.table(itemsByDescendingName);
