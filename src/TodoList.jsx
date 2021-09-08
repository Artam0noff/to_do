import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';


const TodoList = ({todos,deleteTodo,changeStatus}) => (
    <List className = "List">
        {todos.map((todo,index) => (
            <ListItem key={index.toString()} dense button >
                <Checkbox 
                    checked = {todo.isDone}
                    tabIndex={-1} 
                    disableRipple
                    onClick= {() => {changeStatus(index)}}
                        
                ></Checkbox>
                <ListItemText primary={todo.task}></ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="delete"
                        onClick={() => {deleteTodo(index)}}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TodoList;