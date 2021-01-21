// Пример 1 SPREAD
// Напиши функцию, которая принимает массив чисел и находит минимальное

const findMinNumber = function (arr){ 
    return Math.min(...arr);
};
console.log(findMinNumber([10, 50, 55, 78, 100]));

// стрелочная функция
const arrayOfNumbers = [23, 45, 78, 90, 7];

const getMinOfArr = numbers => Math.min(...numbers);
console.log(getMinOfArr(arrayOfNumbers));
