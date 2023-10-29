import TodoListItem from './TodoListItem';
import { Todo } from './TodoContainer';
import React from 'react';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => Promise<void>;
  onToggleCompleted: (id: number) => Promise<void>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggleCompleted }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className="border-bottom pb-2 mb-2">
          <TodoListItem todo={todo} onDelete={onDelete} onToggleCompleted={onToggleCompleted} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
