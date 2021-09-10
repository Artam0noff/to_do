import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import RApp from './AppRedux';
import reportWebVitals from './reportWebVitals';



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

function render(){
    ReactDOM.render(
      <React.StrictMode>
        <RApp store={store} />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

store.subscribe(render);

render();

reportWebVitals();
