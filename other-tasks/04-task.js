// Пример 4 - напишите функции
// calculate(num1, num2, action) - которая принимает 2 числа
// и action - функцию - действие над числами
// add(a, b) - складывает числа
// substract(a, b) - вычитает из числа a число b
// mult(a, b) - умножает числа
// divide(a, b) - делит число a на число b

const calculate = (num1, num2, action) => {
  console.log(action(num1, num2));
};

// const add = (a, b) => a + b;
// const substract = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const divide = (a, b) => a / b;

// calculate(5, 5, add);
// calculate(5, 5, substract);
// calculate(5, 5, mult);
// calculate(5, 5, divide);

// Чтобы не делать много переменных с функциями, можно функции передать как анонимные
calculate(10, 7, (a, b) => a + b);
calculate(1, 6, (a, b) => a - b);
calculate(4, 8, (a, b) => a * b);
calculate(49, 7, (a, b) => a / b);
