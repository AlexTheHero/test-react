import * as React from 'react';
import { TodosContext } from '../../todo-context';

import './todo-form.scss';

import { randId } from '../../utils/helers';

const taskBuilder = (label) => ({
  label,
  id: randId(),
  checked: false,
});

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    // Fin an ability to add new task
    const newTask = taskBuilder(task);
    setTodos([...todos, newTask]);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
