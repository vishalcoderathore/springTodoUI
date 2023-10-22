import TodoListItem from './TodoListItem';
import React from 'react';

interface TodoListProps {
  todos: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className="border-bottom pb-2 mb-2">
          <TodoListItem todo={todo} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
