// Пример 2 - Напишите функцию filterRange(arr, a, b),
// которая принимает массив arr,
// ищет в нём элементы между a и b
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив
// и не изменять исходный.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterRange = (arr, min, max) => {
//   const filteredArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i >= min && i <= max) {
//       filteredArray.push(i);
//     }
//   }

//   return filteredArray;
// };

// const filterRange = (arr, min, max) => {
//   const filteredArray = [];

//   arr.forEach((number) => {
//     if (number >= min && number <= max) {
//       filteredArray.push(number);
//     }
//   });

//   return filteredArray;
// };

const filterRange = (arr, min, max) =>
  arr.filter((number) => number >= min && number <= max);

console.log(filterRange(numbers, 4, 7));
console.log(filterRange(numbers, 1, 3));
