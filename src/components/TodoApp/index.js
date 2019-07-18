import React, { useState } from 'react';
import View from "./View";
import uuidv4 from "uuid/v4";

const initialTasks = [
    { id: uuidv4(), task: "design" },
    { id: uuidv4(), task: "reactjs" },
    { id: uuidv4(), task: "nodejs" },
];


const Index = () => {

    const [tasks, setTasks] = useState(initialTasks);

    const createNewTasks = (task) => {
        setTasks(currentTasks => {
            const newTasks = [...currentTasks, { id: uuidv4(), task }]; 
            return newTasks; 
        });
    };

    return (
        <View tasks={tasks} createNewTasks={createNewTasks} />
    )
}

export default Index; 
