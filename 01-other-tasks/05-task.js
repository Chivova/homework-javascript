// 5 - Перемешивание
// Напишите функцию shuffle,
// которая принимает массив и возвращает новый,
// с теми же элементами, но в случайном порядке.

const numbers = [1, 2, 3, 4, 5, 6];

// function randomCompare() {
//   return Math.random() - 0.5; // if Math.random() < 0.5 отрицательное,
//   // иначе положительное, таким образом происходит сортировка в sort
// }

const shuffle = (arr) => {
  const result = arr.slice(); // создаем новый массив

  result.sort(() => Math.random() - 0.5); // параметры в sort не нужны потому что нет сортировки от и до
  //   result.sort(randomCompare);

  return result;
};

console.log(shuffle(numbers));
console.log(shuffle(numbers));
console.log(shuffle(numbers));
console.log(shuffle(numbers));
console.log(shuffle(numbers));
