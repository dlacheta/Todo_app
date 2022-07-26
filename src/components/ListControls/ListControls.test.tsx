import React from 'react';
import { render as rtlRender, fireEvent } from '@testing-library/react';
import ListControls from './ListControls';
import { FilterEnum } from '../../types';

const render = (newProps?: any) => {
  const props = {
    todosLeft: 0,
    isTodosCompleted: true,
    filter: FilterEnum.all,
    onFilterChange: jest.fn(),
    onClearCompleted: jest.fn(),
    ...newProps,
  };
  const wrapper = rtlRender(<ListControls {...props} />);

  return {
    wrapper,
    props,
  };
};

test('should render component', () => {
  const {
    wrapper: { container },
  } = render();

  expect(container).toMatchSnapshot();
});

test('should run onFilterChange() with all', () => {
  const {
    wrapper: { getByTestId },
    props,
  } = render();

  const container = getByTestId('all-control');
  fireEvent.click(container);

  expect(props.onFilterChange).toHaveBeenCalledWith(FilterEnum.all);
});

test('should run onFilterChange() with active', () => {
  const {
    wrapper: { getByTestId },
    props,
  } = render();

  const container = getByTestId('active-control');
  fireEvent.click(container);

  expect(props.onFilterChange).toHaveBeenCalledWith(FilterEnum.active);
});

test('should run onFilterChange() with completed', () => {
  const {
    wrapper: { getByTestId },
    props,
  } = render();

  const container = getByTestId('completed-control');
  fireEvent.click(container);

  expect(props.onFilterChange).toHaveBeenCalledWith(FilterEnum.completed);
});

test('should run onClearCompleted()', () => {
  const {
    wrapper: { getByTestId },
    props,
  } = render();

  const container = getByTestId('clear-completed-control');
  fireEvent.click(container);

  expect(props.onClearCompleted).toHaveBeenCalled();
});
