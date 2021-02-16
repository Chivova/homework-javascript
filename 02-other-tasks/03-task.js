// Напиши класс Client который создаёт объект
// со свойствами login и email.
// Объяви приватные свойства login и email,
// доступ к которым сделай через геттер и сеттер login и email.

class Client {
  constructor({ login, email } = {}) {
    this._login = login;
    this._email = email;
  }

  get login() {
    return this._login;
  }

  set login(newLogin) {
    console.log(`Old login: ${this._login}, New login: ${newLogin}`);
    this._login = newLogin;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    // if (!newEmail.includes('@')) return; // проверка или есть @ в новом email
    console.log(`Old email: ${this._email}, New email: ${newEmail}`);
    this._email = newEmail;
  }
}
const mango = new Client({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.email);
mango.email = 'fakeemail';
console.log(mango.email);

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new Client({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
