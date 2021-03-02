import users from './users.js';

/*
Задание 21

Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей
отсортированный по возрастанию их баланса(свойство balance).
*/

const sortByAscendingBalance = (users) =>
  [...users].sort(
    (prevBalance, nextBalance) => prevBalance.balance - nextBalance.balance
  );

console.table(sortByAscendingBalance(users));

/*
Задание 22

Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей
отсортированный по убыванию количества их друзей(свойство friends).
*/

const sortByDescendingFriendCount = (users) =>
  [...users].sort(
    (prevFriend, nextFriend) =>
      nextFriend.friends.length - prevFriend.friends.length
  );

console.table(sortByDescendingFriendCount(users));

/*
Задание 23

Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей
отсортированный по их имени(свойство name) в алфавитном порядке.
*/

const sortByName = (users) =>
  [...users].sort((firstUser, secUser) =>
    firstUser.name.localeCompare(secUser.name)
  );
console.table(sortByName(users));
