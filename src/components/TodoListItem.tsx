// TodoListItem.tsx

import React from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li className="list-group-item">
      {todo.title}
      {/* You can add more functionalities like editing, marking as complete, etc. */}
    </li>
  );
};

export default TodoListItem;
