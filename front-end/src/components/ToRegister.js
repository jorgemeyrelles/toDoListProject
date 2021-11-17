import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
// import { Container } from './styles';

function ToRegister() {
  const [login, setLogin] = useState({ email: '' });
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  function handleChange({ target: { value, name } }) {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  useEffect(() => {
    const { email, name } = login;
    const minPass = 3;
    const emailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (emailValid.test(email) && name.length > minPass) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [login]);

  function submitBtn() {
    const { name, email } = login;
    // enviar email para gerar token e buscar id pelo getbyid model
    navigate('/home/:id');
  }
  
  return (
    <main>
      <h2>Register</h2>
      <form>
        <div>
          <h4>Name</h4>
          <input
            id='id'
            type='text'
            placeholder='Type your name here'
            name='name'
            onChange={ handleChange }
          />
        </div>
        <div>
          <h4>E-mail</h4>
          <input
            id='id'
            type='email'
            placeholder='Type your e-mail here'
            name='email'
            onChange={ handleChange }
          />
        </div>
        <button
          type='button'
          disabled={ disabled }
          onClick={ () => submitBtn }
        >
          Register
        </button>
      </form>
    </main>
  );
}

export default ToRegister;