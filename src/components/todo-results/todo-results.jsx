import * as React from 'react';

import './todo-results.scss';

import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    const completedTasksCount = todos.reduce((count, task) => {
      let newCount = count;

      if (task.checked === true) {
        newCount += 1;
      }

      return newCount;
    }, 0);

    return completedTasksCount;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
