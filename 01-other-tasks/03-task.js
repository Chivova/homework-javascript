// Пример 3 - Напишите функцию getAverage(numbers),
// которая принимает массив чисел и возвращает среднее
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const getAverage = (arr) => {
//   let sum = 0;
//   arr.forEach((value) => {
//     sum += value;
//   });
//   return sum / arr.length;
// };

const getAverage = (arr) => {
  const sum = arr.reduce((acc, value) => acc + value, 0);

  const average = sum / arr.length;

  return average;
  //   return sum / arr.length;
};

console.log(getAverage(numbers));
