/* Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
Если продукт с таким названием не найден, функция должна возвращать null. */

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    let productPrice = null;
    
    for (const product of products) {
    
     if (product.name === productName) {
          productPrice = product.price
     }
    }
    return productPrice;
}

console.log(getProductPrice('Радар')); //  возвращает 1300.
console.log( getProductPrice('Захват')); //  возвращает 1200.
console.log(getProductPrice('Сканер')); //  возвращает 2700.
console.log(getProductPrice('Дроид')); // возвращает 400.
console.log(getProductPrice('Двигатель')); //  возвращает null.