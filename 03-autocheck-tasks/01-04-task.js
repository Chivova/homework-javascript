/*
Задание 1

Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается
как результат работы функции.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*/

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   return totalPrice;
// }

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach((el) => {
    totalPrice += el;
  });

  return totalPrice;
}

// console.log(calculateTotalPrice([12, 85, 37, 4])); //возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); //возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //возвращает 1116.

/*
Задание 2

Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут
только те элементы оригинального массива, которые больше чем значение параметра value.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*/

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   return filteredNumbers;
// }

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //  возвращает [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //  возвращает [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //  возвращает [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //  возвращает [24, 41, 76].

/*
Задание 3

Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры
firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*/

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
// }

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach((el) => {
    if (secondArray.includes(el)) {
      commonElements.push(el);
    }
  });

  return commonElements;
}
// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает [].

/*
Задание 4

Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
значение которого это чётное число, добавляя к нему значение параметра value.
Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала,
наполняла и возвращала новый массив с обновлёнными значениями.
*/

// function changeEven(numbers, value) {

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }

// }

const changeEven = (numbers, value) => {
  const updateEvenArray = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      updateEvenArray.push(number + value);
    } else {
      updateEvenArray.push(number);
    }
  });

  return updateEvenArray;
};

// Функция changeEven не изменяет значение параметра numbers.
console.log(changeEven([1, 2, 3, 4, 5], 10)); //  возвращает новый массив [1, 12, 3, 14, 5].
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // возвращает новый массив [12, 18, 3, 7, 14, 16].
console.log(changeEven([17, 24, 68, 31, 42], 100)); // возвращает новый  массив [17, 124, 168, 31, 142].
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // возвращает новый массив [144, 13, 81, 192, 136, 154].
