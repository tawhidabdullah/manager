import React, { createContext } from 'react';
import uuidv4 from "uuid/v4";


// import custom hooks
import useListInput from "../helpers/hooks/useListInput";

const initialTasks = [
    { id: uuidv4(), task: "design" ,todos: []},
    { id: uuidv4(), task: "reactjs",todos: [] },
    { id: uuidv4(), task: "nodejs", todos: []},
];

export const taskContext = createContext();
export const tododContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, createNewTasks] = useListInput(initialTasks);
    const selectTodo = (id) => {
      return tasks.find(task => {
            return task.id === id; 
        }); 
    }; 


    return (
        <taskContext.Provider value={{tasks, createNewTasks,selectTodo}}>
            {props.children}
        </taskContext.Provider>
    );
}; 





