// TodoContainer.tsx

import React, { useState } from 'react';
import TodoList from './TodoList';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Function to add a new todo
  const addTodo = (): void => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        title: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  return (
    <div>
      {todos.length ? <TodoList todos={todos} /> : <p>No todos yet.</p>}
      <div className="mt-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e): void => setInputValue(e.target.value)}
          placeholder="Enter a new todo"
          className="form-control"
        />
        <button onClick={addTodo} className="btn btn-primary mt-2">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoContainer;
