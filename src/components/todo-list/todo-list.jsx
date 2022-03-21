import * as React from 'react';

import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';

import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    const updatedTodos = todos.map((todo) => {
      const updatedTodo = todo;
      if (updatedTodo.id === id) {
        updatedTodo.checked = !updatedTodo.checked;
      }

      return updatedTodo;
    });

    setTodos(updatedTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
