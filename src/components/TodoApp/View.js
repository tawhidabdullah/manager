import React from 'react';
import AllTasks from "./AllTasks";
import TodoList from "./TodoList";

const View = ({tasks,createNewTasks}) => {
    return (
        <div id='theManager'>
            <h1 class="title">Stuff I need to do</h1>
            <AllTasks tasks={tasks} createNewTasks={createNewTasks}/>
            <TodoList />
        </div>
    )
}; 

export default View; 
