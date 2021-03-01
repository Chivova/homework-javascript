/*
 Задание 14

Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
*/

const objPlayers = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(objPlayers); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, playtime) => acc + playtime, 0);
// console.log(totalPlayTime);

const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

/*
Задание 15

Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
и получить общую сумму этих времён.Рассчитать время для каждого из игроков, можно разделив
его время(свойство playtime) на количество игр(свойство gamesPlayed)

Значение переменной totalAveragePlaytimePerGame это число 1023.
Для перебора массива players используется метод reduce().
*/

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce(
  (playerTime, { playtime, gamesPlayed }) =>
    playerTime + playtime / gamesPlayed,
  0
);

// console.log(totalAveragePlaytimePerGame);

/*
Задача 16

Общее количество друзей
Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

const getTotalFriendCount = (users) => {};
Вызов функции с указанным массивом пользователей возвращает число 14
*/
import users from './users.js';

const getTotalFriendCount = (users) => {
  return users.reduce(
    (allFriends, { friends }) => allFriends + friends.length,
    0
  );
};

console.log(getTotalFriendCount(users));
