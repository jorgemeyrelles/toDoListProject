import React from 'react';
import './App.css';
// import ToDoList from './components/ToDoList';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/home" element={ <Home /> } />
    </Routes>
    // <Home />
  );
}

export default App;
