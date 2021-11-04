import React, { useState } from 'react';
import ToDo from './ToDo';
import TodoForm from './ToDoForm';

// import { Container } from './styles';

function ToDoList() {
  const [toDo, setToDo] = useState([]);

  const addToDo = (value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }

    const newToDo = [value, ...toDo];
    // console.log(value, ...toDo);
    setToDo(newToDo);
  };

  const editToDoList = (id, value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    setToDo((e) => e.map((item) => (item.id === id ? value : item)));
  };

  const removeToDo = (id) => {
    const removeArr = [...toDo].filter((e) => e.id !== id);
    setToDo(removeArr);
  }

  const completeToDo = (id) => {
    const updateToDo = toDo.map((e) => {
      if (e.id === id) {
        e.isComplete = !e.isComplete;
      }
      return e;
    });
    setToDo(updateToDo);
  }

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={ addToDo } />
      <ToDo
        todo={ toDo }
        completeToDo={ completeToDo }
        removeToDo={ removeToDo }
        updateToDo={ editToDoList }
      />
    </div>
  );
}

export default ToDoList;