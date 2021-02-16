// Напиши класс Client который создаёт объект
// со свойствами login и email.
// Объяви приватные свойства login и email,
// доступ к которым сделай через геттер и сеттер login и email.

const mango = new Client({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.email);

mango.email = 'fakeemail';
console.log(mango.email);

// console.log(mango.login); // Mango
mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new Client({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
