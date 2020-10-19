import React from 'react';

const Form = ({setInputText,todos,setTodos,inputText,setStatus}) => {
    // i can write javascript code and function
    const inputTextHandler = (e) => {
        // getting value from input - can see in f12 console
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    // not making input stay there forever without clearing
    const submitTodoHandler = (e) => {
        e.preventDefault();
        // spread todos
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        // reset State to nothing
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            {/* when onchange it runs inputTextHandler  */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;