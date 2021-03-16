/*
Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

const textInputRef = document.querySelector('#validation-input');

textInputRef.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
  const value = event.target.value.length;
  const dataLength = Number(event.target.dataset.length);

  if (value === dataLength) {
    // textInputRef.classList.remove('invalid');
    textInputRef.classList.add('valid');
  } else {
    // textInputRef.classList.remove('valid');
    textInputRef.classList.add('invalid');
  }
}
