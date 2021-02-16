// Пример - перепишите классы User, Student
// с использованием классов

/* const User = function (name, surname) {
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

  const now = new Date();
  const nowYear = now.getFullYear();

  return nowYear - this.year;
};

const student = new Student('Иван', 'Иванов', 2016); */

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    const fullName = `${this.name} ${this.surname}`;

    return fullName;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);

    this.year = year;
  }

  getCourse() {
    const now = new Date();
    const nowYear = now.getFullYear();

    return nowYear - this.year;
  }
}

const student = new Student('Иван', 'Иванов', 2016);

console.log(student);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2016
console.log(student.getCourse()); //выведет 5 - пятый курс, так как текущий год
