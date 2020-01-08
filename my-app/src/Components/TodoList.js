import React, { useReducer } from 'react';
import Todo from "./Todo";
import TodoForm from './TodoForm';
import { initialState, ToDoReducer } from "../Reducers/Reducers";

const TodoList = () => {
    const [ state , dispatch ] = useReducer(ToDoReducer , initialState);

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo todo={todo} key={todo.id} dispatch={dispatch}/>
            })}
        </div>
    )
}

export default TodoList;