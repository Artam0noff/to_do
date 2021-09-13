import TextField from '@material-ui/core/TextField';
import React , { useState } from 'react';
import {AddTodoAction,deleteTodoAction,changeStatusAction} from './actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ToDoForm = ({saveTodo,addTodo}) => {
  
    const [value,setValue] = useState('')
    return (
    <form onSubmit={
        (e) => {
            e.preventDefault();
            addTodo(value);
            setValue('');
        }
    }>
      <TextField 
        variant = 'outlined'
        placeholder = 'Add task'
        margin = 'normal'
        onChange={(e) => {
            setValue(e.target.value);
        }}
        value = {value}
      />
    </form>
    );
  
  };

  function mapDispatchToProps(dispatch){
     return {
       addTodo: bindActionCreators(AddTodoAction,dispatch),
     }
  }

export default connect(null,mapDispatchToProps)(ToDoForm);