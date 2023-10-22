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

  const deleteTodo = (id: number): void => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (id: number): void => {
    const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
  };

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div>
      {todos.length ? (
        <TodoList todos={todos} onDelete={deleteTodo} onToggleCompleted={toggleCompleted} />
      ) : (
        <p>No todos yet.</p>
      )}
      <div className="mt-3">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e): void => setInputValue(e.target.value)}
            placeholder="Enter a new todo"
            className="form-control"
          />
          <button type="submit" className="btn btn-success mt-2">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoContainer;
