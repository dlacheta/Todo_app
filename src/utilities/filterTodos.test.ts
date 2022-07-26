import filterTodos from './filterTodos';
import { FilterEnum } from '../types';

const todos = [
  {
    todo: 'laundry',
    completed: false,
  },
  {
    todo: 'buy milk',
    completed: true,
  },
  {
    todo: 'buy eggs',
    completed: false,
  },
];

test('should return all todos', () => {
  const result = filterTodos(todos, FilterEnum.all);

  expect(result).toMatchSnapshot();
});

test('should return all active todos', () => {
  const result = filterTodos(todos, FilterEnum.active);

  expect(result).toMatchSnapshot();
});

test('should return all completed todos', () => {
  const result = filterTodos(todos, FilterEnum.completed);

  expect(result).toMatchSnapshot();
});
