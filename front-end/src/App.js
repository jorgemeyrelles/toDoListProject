import React from 'react';
import './App.css';
// import ToDoList from './components/ToDoList';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/home" element={ <Home /> } />
      {/* <Route exact path="/login" component={ Login } /> */}
    </Routes>
    // <Home />
  );
}

export default App;
