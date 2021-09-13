import {createStore} from 'redux';

function todoReducer(state = [], action){
    switch(action.type){
        case 'todos/add':{            
            return [...state,action.value];
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
  
  const initialState = [];
  const store = createStore(todoReducer,initialState);

  export default store;