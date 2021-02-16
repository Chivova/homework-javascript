/*
Напиши класс Storage, который будет создавать объекты для управления складом товаров.
При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

Добавь методы класса:
getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получет товар и, если он есть, удаляет его из текущих
*/

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    // if (this.items.includes(item)) return; // для проверки одинаковых элементов

    this.items.push(item);
  }

  removeItem(item) {
    //  чтобы удалило и дубликаты
    const newItem = [];

    for (const el of this.items) {
      if (el === item) continue;

      newItem.push(el);
    }

    this.items = newItem;

    // или

    // const { items } = this;
    // for (let i = 0; i < items.length; i += 1) {
    //   if (item === items[i]) {
    //     items.splice(i, 1);
    //   }
    // }

    // или

    // if (this.items.indexOf(item) !== -1) {
    //   this.items.splice(this.items.indexOf(item), 1);
    // }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
// console.log(storage);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
