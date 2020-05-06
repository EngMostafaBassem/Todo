import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './TODO/Todo'
import TodoHeader from './TODO/TodoHeader'
function App() {
  
  return (
    <div className="container">
      <TodoHeader/>
    <Todo/>
    </div>
  );
}

export default App;
