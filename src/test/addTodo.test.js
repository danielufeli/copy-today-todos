/**
 * @jest-environment jsdom
 */

import addTodo from '../modules/addTodoTest.js';
import getTodos from '../modules/getTodos.js';

import removeTodos from '../modules/removeTodos.js';

jest.mock('../__mocks__/localstorage');
jest.mock('../__mocks__/list');

describe('Add...', () => {
  test('Test Empty Localstorage', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos();
    const local = localStorage.getItem('todos');
    expect(local).toBe(null);
  });

  test('Test Empty DOM', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos();
    expect(document.body.querySelectorAll('li').length).toBe(0);
  });

  test('Test Adding Tasks', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    const input = { value: 'Book 1' };
    const input2 = { value: 'Book 2' };
    addTodo(input);
    addTodo(input2);
    const local = JSON.parse(localStorage.getItem('todos'));
    expect(local.length).toBe(2);
  });

  test('Test NonEmpty DOM', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos();
    expect(document.body.querySelectorAll('li').length).toBe(2);
  });
});

describe('Remove', () => {
  test('removing first one', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos();
    const todos = JSON.parse(localStorage.getItem('todos'));
    const { index } = todos[0];
    const li = document.getElementById(index);
    removeTodos(li, todos);

    expect(document.querySelectorAll('li').length).toBe(1);
  });

  test('adding and removing', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    const input = { value: 'lisandro' };
    addTodo(input);
    getTodos();
    const todos = JSON.parse(localStorage.getItem('todos'));
    const { index } = todos[todos.length - 1];
    const li = document.getElementById(index);
    removeTodos(li, todos);
    expect(document.querySelectorAll('li').length).toBe(1);
  });
});
