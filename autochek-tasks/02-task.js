/* Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent,
а тот в свою очередь был прототипом для child.

const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
};


const parent = {};
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = {};
child.name = 'Jason';
child.age = 27; */

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.dir(parent);
console.log(parent.isPrototypeOf(child)); // возвращает true.
console.log(parent.surname); // возвращает 'Moore'.
console.log(parent.heritage); // возвращает 'Irish'.
console.log(parent.hasOwnProperty('surname')); // возвращает true.
console.log(parent.hasOwnProperty('heritage')); // возвращает false.
console.log(ancestor.isPrototypeOf(parent)); // возвращает true.
console.log(child.hasOwnProperty('surname')); // возвращает false.
console.log(child.surname); //возвращает 'Moore'.
console.log(child.heritage); //возвращает 'Irish'.
console.log(child.hasOwnProperty('heritage')); // возвращает false.
console.log(ancestor.heritage); //возвращает 'Irish'.
console.log(ancestor.hasOwnProperty('surname')); // возвращает true.
console.log(ancestor.hasOwnProperty('heritage')); // возвращает true.
console.log(ancestor.surname); // возвращает 'Dawson'.
