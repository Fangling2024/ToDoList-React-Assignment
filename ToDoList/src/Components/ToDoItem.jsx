import React from 'react';
import useStore from './UseStore';

const ToDoItem = ({ task, index }) => {
  const toggleTask = useStore((state) => state.toggleTask);
  const removeTask = useStore((state) => state.removeTask);

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(index)}>{task.text}</span>
      <button onClick={() => removeTask(index)}>Delete</button>
    </li>
  );
};

export default ToDoItem;