import { TodosType, FilterEnum } from '../types';

const filterTodos = (todos: TodosType[], filter: FilterEnum): TodosType[] => {
  if (filter === FilterEnum.active)
    return todos.filter((todo) => !todo.completed);
  if (filter === FilterEnum.completed)
    return todos.filter((todo) => todo.completed);
  return todos;
};

export default filterTodos;
