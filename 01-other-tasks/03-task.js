// Пример 3 - Реализуйте "класс" Student (Студент),
// который будет наследовать от "класса" User, подобно тому,
// Этот "класс" должен иметь следующие свойства:
// name (имя, наследуется от User),
// surname (фамилия, наследуется от User),
// year (год поступления в вуз).
// "Класс" должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также "класс" должен иметь метод getCourse(),
// который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

const User = function (name, surname) {
  this.name = name;
  this.surname = surname;
};

User.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
};

const Student = function (name, surname, year) {
  User.call(this, name, surname);

  this.year = year;
};

Student.prototype = Object.create(User.prototype);
Student.prototype.constuctor = Student;

Student.prototype.getCourse = function () {
  // Текущий год
  //   const nowYear = new Date().getFullYear();
  const now = new Date();
  const nowYear = now.getFullYear();

  return nowYear - this.year;
};

const student = new Student('Иван', 'Иванов', 2016);

console.log(student);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2016
console.log(student.getCourse()); //выведет 5 - пятый курс, так как текущий год
