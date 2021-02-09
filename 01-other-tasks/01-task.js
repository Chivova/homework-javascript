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
};

Worker.prototype.getSalary = function (salary) {
  salary = this.rate * this.days;

  return salary;
};

Worker.prototype.getFullName = function () {
  console.log(`${this.name} ${this.surname}`);
};

const worker = new Worker({
  surname: 'Иванов',
  rate: 50,
  name: 'Иван',
  days: 31,
});

console.log(worker);
worker.getFullName();
console.log(worker.getSalary());

const worker2 = new Worker({
  surname: 'Пинчук',
  rate: 20,
  name: 'Санек',
  days: 7,
});

console.log(worker2);
worker2.getFullName();
console.log(worker2.getSalary());
