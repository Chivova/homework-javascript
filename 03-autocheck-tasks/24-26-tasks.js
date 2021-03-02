/*
Задание 24

Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
Значение переменной names это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли'].
Нет объявленых переменных кроме books, MIN_BOOK_RATING и names.
*/

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(({ rating }) => rating >= MIN_BOOK_RATING)
  .sort((firstAutor, secAuthor) =>
    firstAutor.author.localeCompare(secAuthor.author)
  )
  .map(({ author }) => author);

console.table(names);

/*
Задание 25

Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив
уникальных имён друзей(свойство friends) отсортированный по алфавиту.

Вызов функции с указанным массивом пользователей возвращает массив
['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson',
'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes'].
*/

import users from './users.js';

const getSortedFriends = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();

console.log(getSortedFriends(users));

/*
Задание 26

Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала
общий баланс пользователей(свойство balance), пол которых(свойство gender) совпадает со значением параметра gender.

Если значение параметра gender это строка 'male', функция возвращает число 12053.
Если значение параметра gender это строка 'female', функция возвращает число 8863.
*/

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(getTotalBalanceByGender(users, 'male'));
console.log(getTotalBalanceByGender(users, 'female'));
