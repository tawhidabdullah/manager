import React, {useRef} from 'react'; 

const AllTasks = ({tasks,createNewTasks}) => {
    const inputEl = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault(); 
        const task = inputEl.current.value;
        console.log(task);  
        createNewTasks(task); 
    }; 
    return (
        <div class="all-tasks">
            <h2 class="task-list-title">My lists</h2>
            <ul class="task-list">
                {tasks.map(task => {
                    return (
                        <li class="list-name active-list">{task.task}</li>
                    )
                })}
            </ul>

            <form onSubmit={onSubmit}>
                <input
                    ref={inputEl}
                    type="text"
                    class="new list"
                    placeholder="new list name"
                    aria-label="new list name"
                />
                <button
                 class="btn create" 
                 aria-label="create new list">+</button>
            </form>
        </div>
    )
}

export default AllTasks; 
