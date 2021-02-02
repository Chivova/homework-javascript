// Пример 6 - Композиция
// Напишите функцию compose
// Которая принимает несколько функций
// и возвращает функцию, принимающую число
// и применяющую к нему эти функции поочередно

// function add3v2(n) {
//   return n + 3;
// }

const add3 = (n) => n + 3;
const mult5 = (n) => n * 5;
const pow2 = (n) => n ** 2;

const compose = function (...fns) {
  // --> fns(...rest) --> получаем доступ к неограниченому числу параметрам(чтоб принать больше 3 функций)
  // в fns --> будет лежать масив, по которому можно пройтись циклом

  const composed = function (n) {
    // получает какое-то число(n) и по очереди проводит через все функции
    let result = n; // --> изначально запишется 5 (composedFunc1(5)), потом перезапишется на 8, и 40

    for (let i = 0; i < fns.length; i += 1) {
      // console.log(fns[i]); // --> получаем доступ по очереди к каждой функции
      const currentFunction = fns[i];
      result = currentFunction(result); // --> так как fns[i] это текущая функция, ее можно вызвать
      // result = 5 + 3; первый вызов функции add3
      // result = 8 * 5; второй вызов функции mult5
      // result = 40 ** 2; третий вызов функции pow2
    }

    return result;
  };

  return composed;
};

const composedFunc1 = compose(add3, mult5, pow2); // по цепочке (результат от первой функции передается 2, а результат 2 функции передается 3)
console.log(composedFunc1(5));
// add3(5) => 8 | mult5(8) => 40 | pow2(40) => 1600
const composedFunc2 = compose(mult5, pow2, add3);
console.log(composedFunc2(5));
// mult5(5) => 25 | pow2(25) => 625 | add3(625) => 628
