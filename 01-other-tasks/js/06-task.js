// 5 - Туду лист.
// Инпут, куда вводится текст.
// При нажатии на ентер, в список ниже,
// добавляется тудушка. При клике на нее,
// она становится выполненной, т.е. текст зачеркивается

const inputRef = document.querySelector('input');
const formRef = document.querySelector('form');
const todoListRef = document.querySelector('.todo-list');

const completeTodo = (event) => event.target.classList.toggle('complete');

function createTodo(text) {
  const todoItemRef = document.createElement('li');
  todoItemRef.textContent = text;

  todoItemRef.addEventListener('click', completeTodo);

  return todoItemRef;
}

formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = inputRef;

  if (!value) return;

  const todoRef = createTodo(value);

  todoListRef.appendChild(todoRef);

  inputRef.value = '';
});
