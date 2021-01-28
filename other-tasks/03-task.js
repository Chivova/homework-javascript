// Пример 3 - Коллбек функции
// Напишите две функции:
// eachArray(arr, callback) - принимает массив и колбэк
// и вызывает колбэк для каждого элемента массива
// reverseString(str) - принимает строку
// и печатает в консоль задом наперед
const array = ['Happy', 'New', 'Year!!'];

const eachArray = (arr, callback) => {
    for (const str of arr) {
        callback(str);
    }
};

const reverseString = str => {
    const reversedString = str.split('').reverse().join('');
    console.log(reversedString);
}

// Нам без разници какую функцию передавать. Например можно  написать доп функцию чтоб все элементы стали заглавными
const upperCaseString = str => console.log(str.toUpperCase());

eachArray(array, reverseString);
eachArray(array, upperCaseString);