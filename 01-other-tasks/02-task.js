// Пример 2 - Коллбек функции
// Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара,
// а также колбек. Функция создаёт обьект товара,
// добавляя ему уникальный идентификатор в свойство id
// и вызывает колбек передавая ему созданный обьект.

// showProduct(product) - коллбек принимающий обьект продукта
// и логирующий его в консоль

// Что бы увеличивать id можно написать функцию
let id = 0;
const getId = () => id++;

const makeProduct = (name, price, callback) => {
    const product = {
        name,
        price,
        id: getId(), // как альтернатива Date.now(), просто чтоб увеличивался счетчик
        // id: Date.now(), // выводит текущее дату и время, но в мс
    };

    callback(product);
}

// const showProduct = product => {
//     const { name, price, id } = product;
//     const message = `id: ${id}, name: ${name}, price: ${price}`;
//     console.log(message);

// };
// Сокращаем с приминением деструкторизации сразу в параметре

const showProduct = ({ id, name, price }) => {
    const message = `id: ${id}, name: ${name}, price: ${price}`;
    console.log(message);
};

makeProduct('Холодильник', 10000, showProduct);
makeProduct('Холодильник', 8000, showProduct);
makeProduct('Холодильник', 12500, showProduct);