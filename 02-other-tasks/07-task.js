
// Напишите функцию сложения вида add(num1)(num2)
// console.log(add(2)(5)(7)()); // 14
// add() // 0

const add = function (n) {
    let result = 0;

    const addToResult = function (num) {
        if (num === undefined) return result; // -->  возвращаем когда пустые скобки(если вызвать функцию add() вернется undefined)

        result += num;

        return addToResult;
    };

    return addToResult(n); // --> возвращаем функцию с вызовом для того чтобы она могла вызваться на строке 20-21
};

console.log(add(2)(5)(7)()); // 14
console.log(add(5)(5)(12)(10)()); // 32