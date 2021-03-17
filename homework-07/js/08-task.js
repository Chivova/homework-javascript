/*
Задание 8 - дополнительное, выполнять не обязательно
Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div,
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

*/

const refs = {
  inputValue: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onCreateBoxesBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
// refs.renderBtn.addEventListener('click', onCreateBoxes);
// refs.destroyBtn.addEventListener('click', onDestroyBoxes);

// Эту функцию нашел в интернете :)
// function MakeRandomColor() {
//   let color = Math.floor(Math.random() * 16777216).toString(16);
//   return '#000000'.slice(0, -color.length) + color;
// }

function MakeRandomColor() {
  const randomColor = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  const red = randomColor(0, 255);
  const green = randomColor(0, 255);
  const blue = randomColor(0, 255);

  return `rgb(${red},${green},${blue})`;
}

let counter = 20;

function onCreateBoxesBtnClick(amount) {
  amount = Number(refs.inputValue.value);
  const quantityElOfArr = [...new Array(amount)];

  const boxesArr = quantityElOfArr.map((el) => {
    counter += 10;

    el = document.createElement('div');
    el.style.width = counter + 'px';
    el.style.height = counter + 'px';
    el.style.backgroundColor = MakeRandomColor();
    el.style.marginTop = 10 + 'px';
    return el;
  });

  refs.boxesContainer.append(...boxesArr);
}

function onDestroyBtnClick() {
  counter = 20;
  refs.boxesContainer.innerHTML = '';
  refs.inputValue.value = '';
}

// function onInputValid(event) {
//   if (event.currentTarget.value <= Number(event.currentTarget.max)) {
//     return;
//   }
//   alert('Введите число от 0 до 100');
//   event.currentTarget.value = '';
//   boxContainerEl.innerHTML = '';
// }

// function onCreateBoxes(amount) {
//   refs.boxesContainer.innerHTML = '';
//   amount = Number(refs.inputValue.value);
//   const collectionArr = [];

//   for (let i = 1; i <= amount; i++) {
//     const box = document.createElement('div');

//     box.style.width = i * 20 + 'px';
//     box.style.height = i * 20 + 'px';
//     box.style.marginTop = 10 + 'px';
//     box.style.backgroundColor = MakeRandomColor();

//     collectionArr.push(box);
//   }

//   refs.boxesContainer.append(...collectionArr);
// }

// function onDestroyBoxes() {
//
//     [...boxContainerRef.children].forEach(el => el.remove());
//     inputAmountRef.value = null;
// }
