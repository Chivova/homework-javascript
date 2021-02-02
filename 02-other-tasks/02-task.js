// Пример 2 - Привязка контекста
// Исправьте ошибки чтобы код работал.

const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};

const product2 = {
  price: 10000,
  showPrice() {
    console.log(this.price);
  },
};

function callAction(callback) {
  callback();
}

callAction(product.showPrice.bind(product));
callAction(product2.showPrice.bind(product2));

// ИЛИ

// const showProductPrice = product.showPrice.bind(product);
// callAction(showProductPrice);
