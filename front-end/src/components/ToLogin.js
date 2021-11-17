import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
// import { Container } from './styles';

function Login() {
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
    const { email } = login;
    // const minPass = 6;
    const emailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (emailValid.test(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [login]);

  function submitBtn() {
    const { email } = login;
    // enviar email para gerar token e buscar id pelo getbyid model
    navigate('/home/:id');
  }
  
  return (
    <main>
      <h2>Login</h2>
      <form>
        <div htmlFor='id'>
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
          Enter
        </button>
      </form>
      <div
        role='button'
        onKeyPress={ () => navigate('/register') }
        onClick={ () => navigate('/register') }
        tabIndex='0'
      >
        It's my first time here
      </div>
    </main>
  );
}

export default Login;