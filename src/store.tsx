import {createStore} from 'redux';
import {TodoItem, ActionType, ActionValue, Action} from './interfaces';



function todoReducer(state: TodoItem[] = [], action:Action):TodoItem[]{
    switch(action.type){
        case 'todos/add':{      
            return [...state,action.value as TodoItem];
        }
        case 'todos/changeStatus':{
          return state.map( (val,i) => {
            if ( i === action.value){
              val.isDone = !val.isDone;
              return val;
            } else {
              return val;
            }
          })
        }
        case 'todos/delete':{
          return state.filter( (val,i) => i !== action.value)
        }
        default:
            return state;
    }
  }
  
  const initialState:TodoItem[] = [];
  const store = createStore(todoReducer,initialState);

  export default store;