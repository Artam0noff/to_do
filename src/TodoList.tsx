import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {AddTodoAction,deleteTodoAction,changeStatusAction} from './actionCreators';
import {TodoItem, ActionType, ActionValue, Action} from './interfaces';

interface TodoListProps{
    todos: TodoItem[];
    deleteTodo: (index:number) => Action ;
    changeStatus:(index:number) => Action;
 }

const TodoList = ( {todos,deleteTodo,changeStatus}:TodoListProps) => (
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

function mapStateToProps(state:TodoItem[]){
    return {
        todos: state,
    };
}

function mapDispatchToProps(dispatch:Dispatch){
    return {
      changeStatus: bindActionCreators(changeStatusAction,dispatch),
      deleteTodo: bindActionCreators(deleteTodoAction,dispatch),
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);