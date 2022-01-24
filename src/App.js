import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos,] = useState([]);
  const addTodo = todo => {
    if(!todo.txt || /^\s*$/.test(todo.text)) {
        return;
    }

    const newTodos = [todo, ...todos];
  
    console.log(todos);


    setTodos(newTodos);
};

  return ( 
    <div className='todo-app'>
        <h1>What We Got Goin For Today?</h1>
            <TodoForm onSubmit={addTodo}   />
            <TodoList todos={todos} setTodos={setTodos}/>
            
    </div>
  );
}

export default App;
