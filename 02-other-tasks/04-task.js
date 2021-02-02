// Пример 4 - есть функция changeSalary и пользователи
// напишите функцию, которая принимает пользователя и число
// и меняет ему зарплату на число с помощью ф-ии changeSalary

function changeSalary(value) {
  this.salary += value;
}

const user1 = {
  name: 'Афанасий',
  salary: 1300,
};

const user2 = {
  name: 'Анастасия',
  salary: 2500,
};

const changeUserSalary = function (user, value) {
  changeSalary.call(user, value);
  // changeUserSalary.apply(user, [value]);
};

changeUserSalary(user1, 400);
changeUserSalary(user2, 300);
console.table(user1);
console.table(user2);
