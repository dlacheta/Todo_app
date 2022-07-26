import React from 'react';
import {
  TodosListInfo,
  TodosListControls,
  TodosListControl,
  TodosListItemsLeft,
} from './ListControls.styles';
import { FilterEnum } from '../../types';

type Props = {
  todosLeft: number;
  isTodosCompleted: boolean;
  filter: FilterEnum;
  onFilterChange: (filter: FilterEnum) => void;
  onClearCompleted: () => void;
};

const ListControls = ({
  todosLeft,
  isTodosCompleted,
  filter,
  onFilterChange,
  onClearCompleted,
}: Props) => {
  return (
    <TodosListInfo>
      <TodosListItemsLeft>{todosLeft} left</TodosListItemsLeft>
      <TodosListControls>
        <TodosListControl
          data-testid="all-control"
          isActive={filter === FilterEnum.all}
          onClick={() => {
            onFilterChange(FilterEnum.all);
          }}
        >
          All
        </TodosListControl>
        <TodosListControl
          data-testid="active-control"
          isActive={filter === FilterEnum.active}
          onClick={() => {
            onFilterChange(FilterEnum.active);
          }}
        >
          Active
        </TodosListControl>
        <TodosListControl
          data-testid="completed-control"
          isActive={filter === FilterEnum.completed}
          onClick={() => {
            onFilterChange(FilterEnum.completed);
          }}
        >
          Completed
        </TodosListControl>
      </TodosListControls>
      <TodosListControl
        data-testid="clear-completed-control"
        isDisabled={!isTodosCompleted}
        onClick={() => {
          isTodosCompleted && onClearCompleted();
        }}
      >
        Clear completed
      </TodosListControl>
    </TodosListInfo>
  );
};

export default ListControls;
