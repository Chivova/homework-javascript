// Пример 6 - напишите функцию getObjectWithoutPropperty
// которая принимает объект, название свойства
// и возвращает копию объекта без этого свойства

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// const getObjectWithoutPropperty = (obj, key) => {
//     const newObj = { ...obj };

//     delete newObj[key]; // так как key это переменная

//     return newObj;
// };

// еще упрощаем

// const getObjectWithoutPropperty = (obj, key) => {
//     const { [key]: _, ...rest } = obj; // --> из-за дублирования key в аргументе и в переменнной, нужно присвоить новое имя(вообщем для удаления 
//     // в принципе имя и не нужно, но можно через _(подчеркивание ---> в полне нормально имя для такой переменной) либо написать _key)
//     return rest;
// };

// и можно записать еще короче

const getObjectWithoutPropperty = (key, { [key]: _, ...rest }) => rest;
// только нужно поменять местами { [key]: _, ...rest } с key, аргумент ставим первым чтоб дальше использовать как переменную 

console.table(user);
// console.table(getObjectWithoutPropperty(user, 'name'));
// console.table(getObjectWithoutPropperty(user, 'age'));
console.table(getObjectWithoutPropperty('hobby', user));
console.table(getObjectWithoutPropperty('івавіавіаіва', user)); // такого ключа нет, поэтому ничего не удалится

