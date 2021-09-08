import TextField from '@material-ui/core/TextField';
import React , { useState } from 'react';

const ToDoForm = ({saveTodo}) => {
  
    const [value,setValue] = useState('')
    return (
    <form onSubmit={
        (e) => {
            e.preventDefault();
            saveTodo(value);
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

export default ToDoForm;