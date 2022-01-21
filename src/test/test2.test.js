/**
 * @jest-environment jsdom
 */

 import addTodo from '../modules/addTodoTest.js';
 import getTodos from '../modules/getTodos.js';
 import updateTask from '../modules/updateTask.js';
 
 import removeTodos from '../modules/removeTodos.js';
 
 jest.mock('../__mocks__/localstorage');
 jest.mock('../__mocks__/list');

 describe('editing', () => {
     test('edit 1 should save a new desc',() => {
        document.body.innerHTML = '<ul class="todoList"></ul>';
        const input = { value: 'lisandro' };
        addTodo(input);
         getTodos();
        updateTask('daniel','1');
        getTodos();
        const item = JSON.parse(localStorage.getItem('todos'))[0].description;
        expect(item).toMatch("daniel");
         
     }) 
 })