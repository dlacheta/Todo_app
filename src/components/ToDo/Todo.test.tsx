import React from 'react';
import { render as rtlRender, fireEvent } from '@testing-library/react';
import Todo from './ToDo';

const render = (newProps?: any) => {
  const props = {
    id: 'id',
    completed: false,
    onComplete: jest.fn(),
    onDelete: jest.fn(),
    ...newProps,
  };
  const wrapper = rtlRender(<Todo {...props}>Laundry</Todo>);

  return {
    wrapper,
    props,
  };
};

test('should render component as not completed', () => {
  const {
    wrapper: { container },
  } = render();

  expect(container).toMatchSnapshot();
});

test('should render component as completed', () => {
  const {
    wrapper: { container },
  } = render({ completed: true });

  expect(container).toMatchSnapshot();
});

test('should run onComplete()', () => {
  const {
    wrapper: { getByTestId },
    props,
  } = render();

  const container = getByTestId('completed-container');
  fireEvent.click(container);

  expect(props.onComplete).toHaveBeenCalled();
});

test('should run onDelete()', () => {
  const {
    wrapper: { getByTestId },
    props,
  } = render();

  const container = getByTestId('delete-button');
  fireEvent.click(container);

  expect(props.onDelete).toHaveBeenCalled();
});
