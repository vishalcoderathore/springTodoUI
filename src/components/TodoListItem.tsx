/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  onToggleCompleted: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onDelete, onToggleCompleted }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`d-flex justify-content-between align-items-center mb-2 ${todo.completed ? 'completed' : ''}`}
      onClick={(): void => onToggleCompleted(todo.id)}
      style={{ cursor: 'pointer' }}>
      <span>{todo.title}</span>
      <button
        onClick={(e): void => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        className="btn btn-danger btn-sm">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoListItem;
