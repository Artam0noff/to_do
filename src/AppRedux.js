import './App.css';
import React , { useEffect, useState } from 'react';
import { createStore } from 'redux';
import ToDoForm from './TodoForm';
import TodoList from './TodoList';



function AddTodoAction(text) {
    const trimmedText = text.trim();

    const taskItem = {
        task: trimmedText,
        isDone: false,
    };

    if(trimmedText.length > 0)
    {
        return { type: 'todos/add', value: taskItem};
    } else {
        return ;
    }
}

function todoReducer(state = [], action){
    switch(action.type){
        case 'todos/add':{            
            return [...state,action.value];
        }
        default:
            return state;
    }
}

const initialState = [];
const store = createStore(todoReducer,initialState);

const RApp = () => {


    return (<div className='App'>
        <h1>Todo</h1>
        <ToDoForm 
            saveTodo = { taskText => {
                store.dispatch(AddTodoAction(taskText));
                console.log(store.getState());
            }}
        />
        <TodoList todos = {store.getState()}></TodoList>
    </div>);
}



export default RApp;