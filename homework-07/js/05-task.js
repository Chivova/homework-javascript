/*
Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', onInputText);

function onInputText(event) {
  nameOutputRef.textContent = event.target.value;

  if (!event.target.value) {
    nameOutputRef.textContent = 'незнакомец';
  }
}
