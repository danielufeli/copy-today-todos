/**
 * @jest-environment jsdom
 */

import addTodo from '../modules/addTodoTest.js';
import getTodos from '../modules/getTodos.js';
import updateTask from '../modules/updateTask.js';
import statusUpdate from '../modules/updateTodos.js';

jest.mock('../__mocks__/localstorage');
jest.mock('../__mocks__/list');

describe('editing', () => {
  test('edit 1 should save a new desc', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    const input = { value: 'lisandro' };
    addTodo(input);
    updateTask('daniel', '1');
    getTodos();
    const item = JSON.parse(localStorage.getItem('todos'))[0].description;
    expect(item).toMatch('daniel');
  });

  test('Test Updated DOM', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos();
    const descriptionInput = document.body.querySelector('.task-des');
    expect(descriptionInput.value).toBe('daniel');
  });
});

describe('Complete Status Check', () => {
  test('Set Completed to true', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos();
    const checked = document.getElementById('1');
    checked.click();
    statusUpdate('1');
    const completed = JSON.parse(localStorage.getItem('todos'))[0].completed;
    expect(completed).toBe(true);
  });

  test('Set Completed to false', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos();
    const checked = document.getElementById('1');
    checked.click();
    statusUpdate('1');
    const completed = JSON.parse(localStorage.getItem('todos'))[0].completed;
    expect(completed).toBe(false);
  });
});
