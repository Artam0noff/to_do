//import logo from './logo.svg';
import './App.css';
import React , { useState } from 'react';
import ToDoForm from './TodoForm';
import TodoList from './TodoList';




function App() {
    const [todos,setTodos] = useState([]);

    return (
            <div className="App">
              <h1> ToDo </h1>
              <ToDoForm saveTodo = {taskText => {
                const trimmedText = taskText.trim();

                const taskItem = {
                  task: trimmedText,
                  isDone: false,
                }


                if(trimmedText.length > 0)
                {
                  setTodos([...todos,taskItem]);
                }

              }} />
              <div className="List">
              <TodoList 
                        todos={todos} 
                        deleteTodo={index => {
                              const newTodos = todos
                                .filter((val,i)=> i !== index);
                              setTodos(newTodos);
                          }
                        }
                        changeStatus = {index => {
                          const newTodos = todos
                          .map((val,i) => {
                            if( i === index){
                              val.isDone = !val.isDone;
                              return val;
                            } else {
                              return val;
                            }
                          })
                          setTodos(newTodos);

                        }}
                        />
                        </div>
            </div>
          );

}


export default App;
