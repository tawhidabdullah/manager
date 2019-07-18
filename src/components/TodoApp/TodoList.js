import React from 'react'; 

const TodoList = () => {
    return (
        <div class="todo-list">
            <div class="todo-header">
                <h2 class="list-title">YouTube</h2>
                <p class="task-count">3 tasks remaining</p>
            </div>

            <div class="todo-body">
                <div class="tasks">
                    <div class="task">
                        <input
                            type="checkbox"
                            id="task-1"
                        />
                        <label for="task-1">
                            <span class="custom-checkbox"></span>
                            record todo list video
                </label>
                    </div>
                    {/* <!-- /task-1 --> */}


                    <div class="task">
                        <input
                            type="checkbox"
                            id="task-3"
                        />
                        <label for="task-3">
                            <span class="custom-checkbox"></span>
                            a third task
                    </label>
                    </div>
                    {/* <!-- /task-2 --> */}
                </div>

                <div class="new-task-creator">
                    <form action="">
                        <input
                            type="text"
                            class="new task"
                            placeholder="new task name"
                            aria-label="new task name"
                        />
                        <button class="btn create" aria-label="create new task">+</button>
                    </form>
                </div>

                <div class="delete-stuff">
                    <button class="btn delete">Clear completed tasks</button>
                    <button class="btn delete">Delete list</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList; 
