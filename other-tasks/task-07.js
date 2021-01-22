// Пример 7 напишите скрипт,  который поочереди спрашивает имя, возраст и зарплату и выводит в консоль 
// объект только с теми полями, которые были указаны

const name = prompt('Input name:');
const age = prompt('Input age:');
const salary = prompt('Input salary:');

// const userProfile = { };

// чтобы избежать записи  пустых строк или null, которые может вернуть метод prompt, можно задать условие
// if (name) userProfile.name = name;
// или 
// if (name) {
//    userProfile.name = name; 
// }
// если name true делаем запись, так как продолжить возвращает пустую строку(а она false) запись не выполнится
// if (age) userProfile.age = age;
// if (salary) userProfile.salary = salary;

// Более короче синтаксис с использованием spread

const userProfile = { 
    ...(name && { name }),
    // если name true, то запиши spread обьекта  { name }, который вернет просто поле name
    ...(age && { age }),
    ...(salary && { salary }),
    
};
console.log(userProfile);