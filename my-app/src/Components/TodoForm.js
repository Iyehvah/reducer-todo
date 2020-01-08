import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
    const [item, setItem] =useState('');

    const changeHandler = (e) => {
        setItem(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        })
        setItem('');
    };

    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch({
            type:  "CLEAR_COMPLETED"
        });
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={changeHandler} value={item}/>
                <button>Add!</button>
                <button onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;