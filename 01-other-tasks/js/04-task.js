// Пример 3 - Ctrl
// Дан элемент.
// Сделайте так, чтобы по клику на него он красился в красный цвет,
// но только если в момент клика нажата клавиша Ctrl.
const rectRef = document.querySelector('.rect');

rectRef.addEventListener('click', onCtrlPaintRect);

function onCtrlPaintRect(event) {
  //   console.dir(event);

  if (event.ctrlKey) {
    rectRef.classList.add('red');
  }

  //   if (event.altKey) {
  //     rectRef.classList.remove('red');
  //   }
}

rectRef.addEventListener('click', onAltPaintRect);

function onAltPaintRect(event) {
  if (event.altKey) {
    rectRef.classList.remove('red');
  }
}
