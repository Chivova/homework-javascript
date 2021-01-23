/*hasOwnProperty:
Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта.
Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства.Для того чтобы узнать есть в объекте
собственное свойство или нет, используется метод hasOwnProperty(), который возвращает true или false. */

// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки

//   keys.push(key);
//   values.push(apartment[key]);
// }

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
      keys.push(key);
      values.push(apartment[key]);
  }
}
console.log(keys);
console.log(values);