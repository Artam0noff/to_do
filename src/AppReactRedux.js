import './App.css';
import React  from 'react';
import ToDoForm from './TodoForm';
import TodoList from './TodoList';
import {connect} from 'react-redux';


const RRApp = ({todos}) => {


    return (<div className='App'>
            <div className = 'List'>
                <h1>Todo</h1>
                <ToDoForm />
                <TodoList></TodoList>
            </div>
    </div>);
}




export default RRApp;