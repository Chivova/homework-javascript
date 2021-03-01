/*
Задание 11
Используя метод find() дополни код так, чтобы:

В переменной bookWithTitle получился объект книги название которой(свойство title)
совпадает со значением переменной BOOK_TITLE.
В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
*/

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';

const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
const bookByAuthor = books.find(({ author }) => author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

/*
Задание 12

Используя метод every() дополни код так, чтобы:
В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
*/

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);

// console.log(eachElementInFirstIsEven); // eachElementInFirstIsEven это буль true.
// console.log(eachElementInFirstIsOdd); // eachElementInFirstIsOdd это буль false.

// console.log(eachElementInSecondIsEven); // eachElementInSecondIsEven это буль false.
// console.log(eachElementInSecondIsOdd); // eachElementInSecondIsOdd это буль true.

// console.log(eachElementInThirdIsEven); // eachElementInThirdIsEven это буль false.
// console.log(eachElementInThirdIsOdd); // eachElementInThirdIsOdd это буль false.

/* Задание 13

Используя метод some() дополни код так, чтобы:
В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray */

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((el) => el % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((el) => el % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((el) => el % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((el) => el % 2 !== 0);

console.log(anyElementInFirstIsEven); // это буль true.
console.log(anyElementInFirstIsOdd); // это буль false.

console.log(anyElementInSecondIsEven); // это буль false.
console.log(anyElementInSecondIsOdd); // это буль true.

console.log(anyElementInThirdIsEven); // это буль true.
console.log(anyElementInThirdIsOdd); // это буль true.
