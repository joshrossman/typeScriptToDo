import React, { useState } from 'react'
import NewToDo from './NewToDo'




const TaskManager =()=>{
    const [task,newTask] = useState<string>('')
    const [description, newDescription] = useState<string>('')
    const [taskList, newTaskList] = useState<Todo[]>([])
    
    return(
        <NewToDo task={task} description={description} newTaskList={newTaskList} newTask={newTask} newDescription={newDescription} taskList={taskList} />
    )
    
}

export default TaskManager