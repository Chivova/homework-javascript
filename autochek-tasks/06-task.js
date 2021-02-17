/*
Хранилище

Напиши функцию - конструктор Storage, которая будет создавать объекты для управления складом товаров.
Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

Добавь методы на прототип:
getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта,
который вызывает этот метод.
removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта,
который вызывает этот метод.
*/

function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (newItem) {
  this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  const newItem = [];

  for (const el of this.items) {
    if (item === el) continue;
    console.log(item === el);
    newItem.push(el);
  }
  this.items = newItem;
};

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);

console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
