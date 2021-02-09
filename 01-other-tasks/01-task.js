// Пример 1 - Реализуйте "класс" Worker (Работник)
// который будет иметь следующие свойства:
// name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней).
// Также "класс" должен иметь метод getSalary(),
// который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate
// на количество отработанных дней days.
// И метод getFullName() - имя и фамиля работника.

// Реализуйте статическое свойство count,
// в котором храните число созданных работников

const Worker = function ({ name, surname, rate, days } = {}) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;

  Worker.count += 1; // --> статическое свойство(при каждом вызове конструктора будет увеличиваться на 1)
};

Worker.count = 0;
Worker.factory = 'ООО Рога и Копыта';

Worker.prototype.getSalary = function () {
  const salary = this.rate * this.days;

  return salary;
};

Worker.prototype.getFullName = function () {
  const fullName = `${this.name} ${this.surname}`;

  return fullName;
};

const worker = new Worker({
  surname: 'Иванов',
  rate: 50,
  name: 'Иван',
  days: 31,
});

console.log(worker);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 50
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 1550 - то есть 50*31

const worker2 = new Worker({
  surname: 'Пинчук',
  rate: 20,
  name: 'Санек',
  days: 7,
});

console.log(worker2);
console.log(worker2.getFullName());
console.log(worker2.getSalary());

console.log(Worker.count);
console.log(Worker.factory);
