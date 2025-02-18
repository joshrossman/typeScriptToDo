import React, {useState} from 'react';
import TaskContext from './components/TaskContext';
import NewToDo from './components/NewToDo'
import DisplayTasks from './components/DisplayTasks'





const app =()=>{
    const [task,newTask] = useState<string>('')
    const [description, newDescription] = useState<string>('')
    const [taskList, newTaskList] = useState<Todo[]>([{id:1,task:'Clean',description:'The House',completed:false}])
    
    return(
        <>
        <NewToDo task={task} description={description} newTaskList={newTaskList} newTask={newTask} newDescription={newDescription} taskList={taskList} />
        <DisplayTasks taskList={taskList} />
        </>
    )
    
}
export default app;