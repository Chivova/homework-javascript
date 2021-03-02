/*
Задание 17

Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates,
а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
*/

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(releaseDates); // это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
// console.log(authors); // это массив ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский'].
// console.log(ascendingReleaseDates); // это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// console.log(alphabeticalAuthors); // это массив ['Бернард Корнуэлл', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский']

/*
Задание 18

Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию.
Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию
копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
*/

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort();

const descendingReleaseDates = [...releaseDates].sort(
  (prevData, nextData) => nextData - prevData
);

// console.log(releaseDates); // это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
// console.log(ascendingReleaseDates); // это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// console.log(descendingReleaseDates); // это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967].

/*
Задание 19

Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке.
Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту
копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
*/

const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт',
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((prevAuthor, nextAuthor) =>
  prevAuthor.localeCompare(nextAuthor)
);

const authorsInReversedOrder = [...authors].sort((prevAuthor, nextAuthor) =>
  nextAuthor.localeCompare(prevAuthor)
);

// console.log(authors); // это массив ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский', 'Говард Лавкрафт'].
// console.log(authorsInAlphabetOrder); // это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
// console.log(authorsInReversedOrder); // это массив ['Федор Достоевский', 'Роберт Шекли', 'Ли Танит', 'Говард Лавкрафт', 'Бернард Корнуэлл'].

/*
Задание 20
Дополни код так, чтобы:

В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
*/

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((firstAuthor, secAuthor) =>
  firstAuthor.author.localeCompare(secAuthor.author)
);
console.table(sortedByAuthorName);

const sortedByReversedAuthorName = [...books].sort((firstAuthor, secAuthor) =>
  secAuthor.author.localeCompare(firstAuthor.author)
);
console.table(sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort(
  (firstRating, secRating) => firstRating.rating - secRating.rating
);
console.table(sortedByAscendingRating);

const sortedByDescentingRating = [...books].sort(
  (firstRating, secRating) => secRating.rating - firstRating.rating
);
console.table(sortedByDescentingRating);
