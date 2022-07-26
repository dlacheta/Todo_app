import React, { useState, useEffect } from 'react';
import { Container } from './App.styles';
import { ToDos } from './components';
import { TodosType } from './types';

const App = () => {
  const [todos, setTodos] = useState<TodosType[]>([]);

  useEffect(() => {
    const storageData = localStorage.getItem('Todos');
    const storageTodos = storageData ? JSON.parse(storageData) : [];
    setTodos(storageTodos);
  }, []);

  return (
    <Container>
      <ToDos
        todos={todos}
        updateTodos={(todos: TodosType[]) => {
          setTodos(todos);
          localStorage.setItem('Todos', JSON.stringify(todos));
        }}
      />
    </Container>
  );
};

export default App;
