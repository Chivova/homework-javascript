/* В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.
Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.
Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'. */

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;
const icon = highTemperatures.icon;

const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature); */

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
    yesterday,
    today,
    tomorrow,
    icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);
