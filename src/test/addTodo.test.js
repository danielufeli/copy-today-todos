/**
 * @jest-environment jsdom
 */

import addTodo from '../modules/addTodo.js';
import LocalStorageMock from '../__mocks__/localstorage';


jest.mock('../__mocks__/localstorage');
jest.mock('../modules/localstorage');

const data = [
  {
    description: 'Book 1',
    index: 1,
    completed: false,
  },
  {
    description: 'Book 2',
    index: 2,
    completed: true,
  },
  {
    description: 'Book 3',
    index: 3,
    completed: false,
  },
];

describe('Add...', () => {
//   test('Abc to empty items', () => {
//     const input = { value: 'Abc' };
//     addTodo(input);
//     expect(itemsEmpty.length).toBe(1);
//   });

  test('Abc to full items', () => {
    const input = { value: 'Abc' };
    const itemsFull = [
      {
        description: 'xyzzy',
        complete: false,
        index: 0,
      },
      {
        description: 'abcde',
        complete: true,
        index: 1,
      },
    ];
    addTodo(input);
    expect(itemsFull.length).toBe(3);
  });
});
