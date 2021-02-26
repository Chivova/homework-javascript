// 5 - Блиц
// На forEach
// Дан массив с числами.
// Создайте новый массив, состоящий из квадратов этих чисел.

const arr = [5, 6, 7, 8, 9];

const squareNumbersArray = [];

const squareNumbers = arr.forEach((num) => {
  const result = num ** 2;

  squareNumbersArray.push(result);
});

// console.log(squareNumbersArray);

// Найдите сумму этих чисел.
let total = 0;
arr.forEach((num) => (total += num));
// console.log(total);

// На map
// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

const mapedSquares = arr.map((num) => num ** 2);
console.log(mapedSquares);

// На reduce
// Найдите сумму этих чисел.
const reduceSum = arr.reduce((acc, num) => acc + num);
console.log(reduceSum);

// На every, some
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля
const positiveNums = [4, 6, 7, 3, 9];
const positiveAndNegativeNums = [4, -6, -7, -3, 9];

// const checkPositiveNums = positiveNums.every((num) => num > 0);
// console.log('checkPositiveNums', checkPositiveNums);

// const checkpositiveAndNegativeNums = positiveAndNegativeNums.every(
//   (num) => num > 0
// );
// console.log('checkpositiveAndNegativeNums', checkpositiveAndNegativeNums);

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

const checkPositiveNums = positiveNums.some((num) => num < 0);
const checkpositiveAndNegativeNums = positiveAndNegativeNums.some(
  (num) => num < 0
);

console.log('checkPositiveNums', checkPositiveNums);
console.log('chekpositiveAndNegativeNums', checkpositiveAndNegativeNums);

// На filter
// Дан массив с числами positiveAndNegativeNums. Оставьте в нем только отрицательные числа.

const filteredNegativeNums = positiveAndNegativeNums.filter((num) => num < 0);
console.log('filteredNegativeNums', filteredNegativeNums);

// Дан массив с числами positiveNums. Оставьте в нем только четные числа.

const evenNums = positiveNums.filter((num) => num % 2 === 0);
console.log('evenNums', evenNums);

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];

const longString = items.filter((item) => item.length >= 5);
console.log('longString', longString);

// Дан массив, в нем могут быть обычные элементы и подмассивы,
// например [1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только подмассивы.

const data = [1, 2, [3, 4], 5, [6, 7]];
const dataArrays = data.filter((item) => Array.isArray(item));
console.log('dataArrays', dataArrays);

// Дан массив с числами positiveAndNegativeNums. Посчитайте количество отрицательных чисел в этом массиве.

const negativeNumsCount = positiveAndNegativeNums.filter((x) => x < 0).length;

console.log('negativeNumsCount', negativeNumsCount);
