/* eslint-disable jsx-a11y/click-events-have-key-events */
// TodoListItem.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from './TodoContainer';
import React from 'react';

interface TodoListItemProps {
  todo: Todo;
  onDelete: (id: number) => Promise<void>;
  onToggleCompleted: (id: number) => Promise<void>;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onDelete, onToggleCompleted }) => {
  const handleToggleCompleted = (): void => {
    onToggleCompleted(todo.id).catch(error => {
      console.error(`Error updating todo: ${error}`);
    });
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation(); // Prevents the event from bubbling up to the parent
    onDelete(todo.id).catch(async error => {
      console.error('Error deleting todo:', error);
    });
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`d-flex justify-content-between align-items-center mb-2 ${todo.completed ? 'completed' : ''}`}
      onClick={handleToggleCompleted}
      style={{ cursor: 'pointer' }}>
      <span>{todo.description}</span>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoListItem;
