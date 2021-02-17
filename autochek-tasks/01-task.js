/* Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};

const child = {};

child.name = 'Jason';
child.age = 27; */

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child = Object.create(parent);

child.name = 'Jason';
child.age = 27;

console.log(child.hasOwnProperty('name')); //возвращает true.
console.log(child.name); //возвращает 'Jason'.
console.log(child.hasOwnProperty('age')); //возвращает true.
console.log(child.age); //возвращает 27.
console.log(child.hasOwnProperty('surname')); //возвращает false.
console.log(child.surname); // 'Moore'.
console.log(child.hasOwnProperty('heritage')); //возвращает false.
console.log(child.heritage); //возвращает 'Irish'.
console.log(parent.isPrototypeOf(child)); //возвращает true.
