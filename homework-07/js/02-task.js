/*
Задание 2

В HTML есть пустой список ul#ingredients.

< ul id = "ingredients" ></ul >

В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов
используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientListRef = document.querySelector('#ingredients');

const makeIngredientList = ingredients.map((el) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = el;

  return ingredientItem;
});

ingredientListRef.append(...makeIngredientList);

// const makeIngredientList = ingredients.map((el) => {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.textContent = el;

//   ingredientListRef.appendChild(ingredientItem);
// });
