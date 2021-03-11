// 1 - Фокус
// Есть инпут. При потере фокуса,
// проверяем его, и если он пустой,
// красим границу в красный цвет!

const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onOutOfInputFocus);
inputRef.addEventListener('focus', onInputFocus);

function onOutOfInputFocus(event) {
  const value = event.target.value;

  // value === '';
  // value.length === 0;
  if (!value) {
    inputRef.classList.add('error');
  }

  // if (!value || !validate(value)) {
  //   inputRef.classList.add('error');
  // }
}

function onInputFocus() {
  inputRef.classList.remove('error');
}

function validate(str) {
  return str.length >= 8;
}
