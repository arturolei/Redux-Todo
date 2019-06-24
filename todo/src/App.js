import React from 'react';
import TodoList from './components/TodoList'
import TodoFrom from './components/TodoForm'

import './App.css';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <TodoList />
        <TodoFrom />
      </div>
    );
  }
}

