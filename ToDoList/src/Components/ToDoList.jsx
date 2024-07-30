import React from 'react';
import ToDoItem from './ToDoItem';
import useStore from './UseStore';

const ToDoList = () => {
  const tasks = useStore((state) => state.tasks);

  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          index={index}
          task={task}
        />
      ))}
    </ul>
  );
};

export default ToDoList;

