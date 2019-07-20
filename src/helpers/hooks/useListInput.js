import  { useState } from "react";
import uuidv4 from "uuid/v4";

const useListInput = (initialLists) => {
    const [tasks, setTasks] = useState(initialLists);

    const createNewTasks = (task) => {
        setTasks(currentTasks => {
            const newTasks = [...currentTasks, { id: uuidv4(), task }]; 
            return newTasks; 
        });
    };

    return [tasks,createNewTasks]; 
};

export default useListInput; 
