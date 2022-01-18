import getTodos from './getTodos.js';

const clearCompletedTask = () => {
  const todoList = document.querySelector('.todoList');
  const oldTodos = JSON.parse(localStorage.getItem('todos'));
  const newFilteredTodos = oldTodos.filter((i) => !i.completed);
  const resetTodosIndexes = newFilteredTodos.map((e, i) => {
    e.index = i + 1;
    return e;
  });
  localStorage.setItem('todos', JSON.stringify(resetTodosIndexes));
  todoList.innerHTML = '';
  getTodos();
};

export default clearCompletedTask;
