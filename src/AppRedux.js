import './App.css';
import React  from 'react';
import ToDoForm from './TodoForm';
import TodoList from './TodoList';
import {AddTodoAction,deleteTodoAction,changeStatusAction} from './actionCreators';


const RApp = ({store}) => {


    return (<div className='App'>
            <div className = 'List'>
                <h1>Todo</h1>
                <ToDoForm 
                    saveTodo = { taskText => {
                        store.dispatch(AddTodoAction(taskText));
                        console.log(store.getState());
                    }}
                />
                <TodoList 
                    todos = {store.getState()}
                    changeStatus = {index => {
                        store.dispatch(changeStatusAction(index));
                    }}
                    deleteTodo = {index => {
                        store.dispatch(deleteTodoAction(index));
                    }}
                ></TodoList>
            </div>
    </div>);
}



export default RApp;