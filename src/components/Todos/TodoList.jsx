import React from 'react';
import Todo from "./Todo";
import styles from './TodoList.module.css';
function TodoList({todos,deleteTodo}) {


    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {
                todos.map((todo, index) => <Todo deleteTodo={deleteTodo} index={index}  key={index} todo={todo}/>)
            }
        </div>
    )
}

export default TodoList;