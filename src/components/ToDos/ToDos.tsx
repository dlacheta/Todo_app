import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import {
  Container,
  FormContainer,
  Input,
  InputContainer,
  ToDoContainer,
  Welcome,
  TodosListContainer,
} from './ToDos.styles';
import { filterTodos } from '../../utilities';
import { TodosType, FilterEnum } from '../../types';
import { FormDataType } from './types';
import ListControls from '../ListControls';
import ToDo from '../ToDo';

type Props = {
  todos: TodosType[];
  updateTodos: (todos: TodosType[]) => void;
};

const ToDos = ({ todos, updateTodos }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormDataType>();
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.all);

  const onSubmit = ({ todo }: FormDataType) => {
    reset(
      {
        todo: '',
      },
      {
        keepValues: false,
      },
    );
    updateTodos([
      ...todos,
      {
        id: uuid(),
        todo,
        completed: false,
      },
    ]);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ToDoContainer>
          <Welcome>Todos</Welcome>
          <FormContainer>
            <InputContainer>
              <Input
                placeholder="What to do next?"
                type="text"
                {...register('todo', { required: true })}
              />
            </InputContainer>
          </FormContainer>
          {todos.length > 0 && (
            <>
              <ListControls
                todosLeft={todos.filter((todo) => !todo.completed).length}
                isTodosCompleted={
                  !!todos.filter((todo) => todo.completed).length
                }
                filter={filter}
                onFilterChange={(filter) => {
                  setFilter(filter);
                }}
                onClearCompleted={() =>
                  updateTodos(todos.filter((todo) => !todo.completed))
                }
              />
              <TodosListContainer>
                {filterTodos(todos, filter).map(({ id, todo, completed }) => (
                  <ToDo
                    key={id}
                    id={id}
                    completed={completed}
                    onComplete={(id) => {
                      updateTodos(
                        todos.map((todo) => {
                          if (todo.id === id)
                            return {
                              ...todo,
                              completed: !todo.completed,
                            };
                          return todo;
                        }),
                      );
                    }}
                    onDelete={(id) => {
                      updateTodos(todos.filter((todo) => todo.id !== id));
                    }}
                  >
                    {todo}
                  </ToDo>
                ))}
              </TodosListContainer>
            </>
          )}
        </ToDoContainer>
      </form>
    </Container>
  );
};

export default ToDos;
