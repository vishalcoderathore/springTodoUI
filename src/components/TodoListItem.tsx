// TodoListItem.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface TodoListItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  onDelete: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span>{todo.title}</span>
      <button onClick={(): void => onDelete(todo.id)} className="btn btn-danger btn-sm">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoListItem;
