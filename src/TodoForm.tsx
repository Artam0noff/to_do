import TextField from '@material-ui/core/TextField';
import React , { useState } from 'react';
import {AddTodoAction,deleteTodoAction,changeStatusAction} from './actionCreators';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {TodoItem, ActionType, ActionValue, Action} from './interfaces';

interface TodoFormProps {
   addTodo: (task:TodoItem) => Action;
}

const ToDoForm = ({addTodo}: TodoFormProps) => {
  
    const [value,setValue] = useState('')
    return (
    <form onSubmit={
        (e) => {
            e.preventDefault();
            const trimmedText = value.trim();
            
            const taskItem = {
                task: trimmedText,
                isDone: false,
            };

            if(trimmedText.length > 0)
            {
            addTodo(taskItem);
            setValue('');
            }
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

  function mapDispatchToProps(dispatch: Dispatch){
     return {
       addTodo: bindActionCreators(AddTodoAction,dispatch),
     }
  }

export default connect(null,mapDispatchToProps)(ToDoForm);