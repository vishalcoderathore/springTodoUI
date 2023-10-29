// TodoContainer.tsx

import { ADD_TODO, DELETE_TODO, GET_ALL_TODOS, UPDATE_TODO } from '../api/apiRoutes';
import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';

export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Fetch todos from backend on component mount
  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        const response = await fetch(GET_ALL_TODOS);
        if (response.ok) {
          const data = await response.json();
          setTodos(data);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    void fetchTodos();
  }, []);

  // Function to add a new todo
  const addTodo = async (): Promise<void> => {
    if (inputValue.trim()) {
      const newTodo = {
        description: inputValue,
        completed: false,
      };
      try {
        const response = await fetch(ADD_TODO, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });

        if (response.status === 200) {
          const addedTodo = await response.json();
          setTodos([...todos, addedTodo]);
          setInputValue('');
        } else {
          console.error('Failed to add todo: ', response.status);
        }
      } catch (error) {
        console.error('Error adding todo: ', error);
      }
    }
  };

  const deleteTodo = async (id: number): Promise<void> => {
    try {
      const response = await fetch(DELETE_TODO(id), {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the deletion was successful on the backend, update the state
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
      } else {
        console.error('Failed to delete todo:', response.status);
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const toggleCompleted = async (id: number): Promise<void> => {
    const todoToUpdate = todos.find(todo => todo.id === id);
    if (todoToUpdate) {
      try {
        const response = await fetch(UPDATE_TODO(todoToUpdate.id), {
          method: 'PUT',
          body: JSON.stringify(!todoToUpdate.completed),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const updatedTodo: Todo = await response.json();
          const updatedTodos = todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
          setTodos(updatedTodos);
        } else {
          console.error('Failed to update todo:', response.status);
        }
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    void addTodo();
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
