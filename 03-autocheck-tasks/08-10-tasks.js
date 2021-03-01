/*
Задание 8

Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().
*/

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(numbers); // это массив [17, 24, 82, 61, 36, 18, 47, 52, 73].
console.log(evenNumbers); // это массив [24, 82, 36, 18, 52].
console.log(oddNumbers); // это массив [17, 61, 47, 73].

/*
Задание 9

Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из массива books,
а в переменной uniqueGenres массив уникальных жанров - без повторений.
*/

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];

// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (book, index, array) => array.indexOf(book) === index
// );

// console.log(allGenres); // это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы', 'мистика', 'приключения'].

// console.log(uniqueGenres); // это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы'].

/*
Задание 10

Используя метод filter() дополни код так, чтобы:
В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating) больше либо равно
значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author) которое
совпадает со значением в переменной AUTHOR.

Значение переменной topRatedBooks это массив книг с рейтингов выше 8.

Значение переменной booksByAuthor это массив книг автор которых 'Бернард Корнуэлл'.
*/

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';

const topRatedBooks = books.filter(({ rating }) => rating > MIN_RATING);
const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);
