// 4 - Напишите функцию unique(arr),
// которая возвращает массив,
// содержащий только уникальные элементы arr

const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

// const unique = (arr) => {
//   const uniqueNumbers = [];

//   arr.forEach((value) => {
//     if (!uniqueNumbers.includes(value)) // -->  !!!!

//       uniqueNumbers.push(value);
//   });

//   return uniqueNumbers;
// };

const unique = (arr) =>
  arr.reduce((acc, value) => {
    if (!acc.includes(value)) {
      // -->  !!!!
      acc.push(value);
    }

    return acc;
  }, []);

console.log(unique(notUniqueNumbers));

// Через контсруктор Set(возвращает сразу уникальные элементы)

const uniqueNumbers = [...new Set(notUniqueNumbers)]; // распыляем сразу в массив
console.log(uniqueNumbers);
