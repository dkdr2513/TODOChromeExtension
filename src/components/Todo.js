import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    // Events
    const deleteHandler = () => {
        // todos.filter goes through every state and cheks
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        // map does doing over each state
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    // whatever it had
                    ...item, completed: !item.completed
                };
            };
            return item;           
        }));
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;