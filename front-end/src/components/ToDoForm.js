import React, { useEffect, useRef, useState } from 'react';

// import { Container } from './styles';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(props.edit.id, e.target.innerText);
    const value = {
      id: e.target.innerText === 'Update' ? props.edit.id : Math.floor(Math.random() * 10000),
      text: input,
    };

    props.onSubmit(value);
    // const getLocal = JSON.parse(localStorage.getItem('toDo'));
    // localStorage.setItem('toDo', JSON.stringify([...getLocal, value]));

    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={ handleSubmit }>
      { props.edit ? (
        <>
          <input
            type='text'
            name='textEdit'
            placeholder='Update the task here'
            className='todo-input edit'
            value={ input }
            onChange={ handleChange }
            ref={ inputRef }
          />
          <button className='todo-button' type='submit'>Update</button>
        </>
      ) : (
        <>
          <input
            type='text'
            name='text'
            placeholder='Add a task here'
            className='todo-input'
            value={ input }
            onChange={ handleChange }
            ref={ inputRef }
            />
          <button
            className='todo-button'
            type='submit'
          >
            New Task
          </button>
        </>
      ) }
    </form>
  );
}

export default TodoForm;