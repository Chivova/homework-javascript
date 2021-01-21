// Пример 4 - используя Object entries
// и деструктуризацию напишите скрипт, который
// выводит содержимое объекта user в формате ключ:значение 

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const userEntries = Object.entries(user);
console.log(userEntries);
for (const entry of userEntries) {
    const [key, value] = entry;  // так как в entry лежит  массив с двумя элементами, то в key записываем элементы 1 в value элемент 2
    // console.log(key);
    // console.log(value);

    console.log(`${key}: ${value}`);
}

// можно не создавать промежуточную переменную const [key, value] = entry
// а сразу записать : ---> будет точно такой же результат
for (const [key, value]  of userEntries) {
   
    console.log(`${key}: ${value}`);
}