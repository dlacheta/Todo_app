import React from 'react';
import {
  Container,
  DeleteButton,
  CompletedContainer,
  TodoContainer,
} from './ToDo.styles';
import EmptyBoxIcon from '../EmptyBoxIcon';
import CheckBoxIcon from '../CheckBoxIcon';
import DeleteIcon from '../DeleteIcon';

type Props = {
  id: string;
  completed: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  children: React.ReactNode;
};

const ToDo = ({ id, completed, onComplete, onDelete, children }: Props) => {
  return (
    <Container>
      <CompletedContainer
        isCompleted={completed}
        onClick={() => onComplete(id)}
        data-testid="completed-container"
      >
        {completed ? <CheckBoxIcon /> : <EmptyBoxIcon />}
        <TodoContainer>{children}</TodoContainer>
      </CompletedContainer>
      <DeleteButton data-testid="delete-button" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </DeleteButton>
    </Container>
  );
};

export default ToDo;
