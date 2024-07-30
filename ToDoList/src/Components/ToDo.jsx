import React from 'react';
import Header from './Header';
import TaskForm from './TaskForm';
import ToDoList from './ToDoList';

const ToDo = () => {
  return (
    <div className="todo-app">
      <Header />
      <TaskForm />
      <ToDoList />
    </div>
  );
};

export default ToDo;