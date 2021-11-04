import React from 'react';
import './App.css';
// import ToDoList from './components/ToDoList';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <Switch>
    //   <Route exact path="/home" component={ Home } />
    // </Switch>
    <Home />
  );
}

export default App;
