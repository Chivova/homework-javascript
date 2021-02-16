// Пример - перепишите классы  Worker, Boss
// с использованием классов
const Worker = function ({ name, surname, rate, days } = {}) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
};

Worker.prototype.getFullName = function () {
  const fullName = `${this.name} ${this.surname}`;

  return fullName;
};

const Boss = function ({ name, surname, rate, days, workers } = {}) {
  Worker.call(this, { name, surname, rate, days });

  this.workers = workers;
};

Boss.prototype = Object.create(Worker.prototype);
console.log(Boss.prototype);

Boss.prototype.constructor = Boss;

Boss.prototype.getSalary = function () {
  const salary = this.rate * this.days * this.workers;

  return salary;
};

const boss = new Boss({
  surname: 'Иванов',
  rate: 10,
  name: 'Иван',
  days: 31,
  workers: 10,
});

console.log(boss.name); //выведет 'Иван'
console.log(boss.surname); //выведет 'Иванов'
console.log(boss.getFullName()); //выведет 'Иванов Иван'
console.log(boss.rate); //выведет 10
console.log(boss.days); //выведет 31
console.log(boss.workers); //выведет 10
console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10
console.log(boss);
