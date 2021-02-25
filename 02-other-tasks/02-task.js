// Пример 2 - Сортировка строк
// Выполнить сортировку массива названий мониторов
// в алфавитном и обратном алфавитном порядке.

const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];

const ascComapre = (prev, next) =>
  prev.toLowerCase() > next.toLowerCase() ? 1 : -1;

const descComapre = (prev, next) =>
  prev.toLowerCase() < next.toLowerCase() ? 1 : -1;

const itemsInAlphabeticalOrder = [...items].sort(ascComapre);
console.table(itemsInAlphabeticalOrder);

const itemsInDescAlphabeticalOrder = [...items].sort(descComapre);
console.table(itemsInDescAlphabeticalOrder);
