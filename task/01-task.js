/* Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
}; */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
// console.log(user); 
// не можно увидеть старый результат, ибо обьект передается по ссылке для этого можно использовать JSON.stringify()
console.log(JSON.stringify(user)); // ---> метод который переобразовует в строку

user.mood = 'happy';
// user['mood'] = 'happy';

user.hobby = 'skydiving';
// user['hobby'] = 'skydiving';

user.premium = false;
// user['premium'] = false;
console.dir(user);

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// const entries = Object.entries(user);
// console.log(entries);
// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }