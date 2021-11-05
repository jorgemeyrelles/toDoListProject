import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import TodoForm from './ToDoForm';
import { addTask } from '../services/taskService';

// import { Container } from './styles';

function ToDoList() {
  const [toDo, setToDo] = useState([]);
  const [saved, setSaved] = useState(JSON.parse(localStorage.getItem('toDo')));

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(toDo));
    setSaved(JSON.parse(localStorage.getItem('toDo')))
  }, [toDo, setToDo]);

  useEffect(() => {
    // const list = JSON.parse(localStorage.getItem('toDo'));
    // console.log(list);
    setToDo(saved)
  }, []);

  const addToDo = (value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }

    const newToDo = [...toDo, value];
    // console.log(value, ...toDo);
    setToDo(newToDo);
    // localStorage.setItem('toDo', JSON.stringify(toDo));
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
    // console.log(id);
    let updateToDo = toDo.map((e) => {
      // console.log(e.isComplete);
      if (e.id === id) {
        e.isComplete = !e.isComplete;
      }
      return e;
    });
    setToDo(updateToDo);
  }

  const sendToDb = () => {
    addTask(JSON.parse(localStorage.getItem('toDo')));
    localStorage.setItem('todoId', JSON.stringify(addTask(JSON.parse(localStorage.getItem('toDo')))));
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <div style={ { display: 'flex', justifyContent: 'space-evenly', position: 'relative' } }>
        <div className='todo-button clear' onClick={() => setToDo([])}>Clear All</div>
        <div className='todo-button save' onClick={ () => sendToDb() }>Save your schedule</div>
      </div>
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