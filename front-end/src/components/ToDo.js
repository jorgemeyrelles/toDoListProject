import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './ToDoForm';

// import { Container } from './styles';

function ToDo({ todo, completeToDo, removeToDo, updateToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (e) => {
    updateToDo(edit.id, e);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={ edit } onSubmit={ submitUpdate } />
  }

  return (
    todo.map((e, i) => (
      <div
        className={ e.isComplete ? 'todo-row complete': 'todo-row' }
        key={ i }
      >
        <div
          className='text-task'
          key={ e.id }
          onClick={ () => completeToDo(e.id) }
        >
          { e.text }
        </div>
        <div className='icons'>
          <RiCloseCircleLine
            onClick={() => removeToDo(e.id) }
            className='delete-icon'
          />
          <TiEdit
            onClick={ () => setEdit({ id: e.id, value: e.text }) }
            className='edit-icon'
          />
        </div>
      </div>
    ))
  );
}

export default ToDo;