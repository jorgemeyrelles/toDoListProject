import React from 'react';

// import { Container } from './styles';

function Header() {
  return (
    <div>
      <img src="" alt="logo todo list" />
      <input
        type="email"
        name="email"
        value={ handleChange }
        onClick={ () => sendToDb() }
        placeholder="Your email here"
      />
      <h1>Hi</h1>
    </div>
  );
}

export default Header;