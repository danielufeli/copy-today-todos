import getTodos from './getTodos.js';

const addTodo = (input) => {
  let todos = [];
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoList = document.querySelector('.todoList');
  const todo = {
    description: input.value,
    index: todos.length + 1,
    completed: false,
  };
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  input.value = '';
  todoList.innerHTML = '';
  getTodos();
};

export default addTodo;
