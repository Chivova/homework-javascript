// Пример 6 - Замыкания
// Напишите функцию savePassword(password)
// которая принимает пароль и возвращает внутреннюю функцию,
// которая принимает строку и возвращает буль true,
// если строка совпадает с сохраненным паролем
// и false - если не совпадает.

// function savePassword(password) {
//   function checkPassword(str) {
//     // if (password === str) {
//     //   return true;
//     // } else {
//     //   return false;
//     // }
//     // return password === str ? true : false; сокращаенный вариант
//     // еще более сокращенный, по результату все равно выведет true || false
//     return password === str;
//   }

//   return checkPassword;
// }

// самая краткая запись этой функции:
const savePassword = (password) => (str) => password === str; // стрелочная фугкция возвращает стрелочную

const chekUserPass = savePassword("qwert"); // здесь функция запоминает пароль. В самой функции запись будет выглядить
// что-то вроде const password = 'qwert';

console.log(chekUserPass(prompt("Input password:")));

// можно через функцию написать еще одну проверку, например проперку пароля админа
const chekAdminPass = savePassword("Qwert12345");

console.log(chekAdminPass(prompt("Input password:")));
