import React, {useState,userEffect, useEffect} from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';
// *** REACT UPDATE ACCORDING TO STATE ***
function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE
  useEffect(() => {
    getLocalTodos();
  }, [])
  // use effect - running function whenever we want (default - runs when start)
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]) // everytime todo, this function is run

  // Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  // savve to loccal
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>
          <img src="title.png" />
        </h1>
      </header>
      {/* now i can use InputText everywhere */}
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
