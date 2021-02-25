// 1 - Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.
// Рассмотреть callback для метода sort.

const prices = [2, 14, 1, 37, 26, 8];

// const pricesInAscendingOrder = [...prices].sort(); // поумолчанию не выйдет, ведь  будет сравнивать по строкам и первому символу [1, 14, 2, 26, 37, 8]

const pricesInAscendingOrder = [...prices].sort(
  (prevPrice, nextPrice) => prevPrice - nextPrice
);
console.log(pricesInAscendingOrder);

const pricesInDescendingOrder = [...prices].sort(
  (prevPrice, nextPrice) => nextPrice - prevPrice
);
console.log(pricesInDescendingOrder);

// const ascCompare = (prev, next) => {
//   //   if (prev > next) return 1;
//   //   if (prev < next) return -1;

//   //   return 0;

//   return prev - next;
// };

// const desCompare = (prev, next) => {
//   //   if (prev > next) return -1;
//   //   if (prev < next) return 1;

//   //   return 0;

//   return next - prev;
// };

// const pricesInAscendingOrder = [...prices].sort(ascCompare);
// console.log(pricesInAscendingOrder);

// const pricesInDescendingOrder = [...prices].sort(desCompare);
// console.log(pricesInDescendingOrder);
