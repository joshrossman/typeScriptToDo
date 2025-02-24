import React, {useState} from 'react';
import TaskContext from './components/TaskContext';
import NewToDo from './components/NewToDo'
import DisplayTasks from './components/DisplayTasks'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home';
import EditToDo from './components/EditToDo';
import AuthenticationGuard from './components/AuthenticationGaurd';
import Callback from './components/Callback'


const app =()=>{
    const [task,setTask] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [taskList, setTaskList] = useState<Todo[]>([])
    
    return(
        <>
        <Routes>
        <Route path='/callback' element={<Callback />} />
        <Route path='/' element={<Home />} />
        <Route 
        path='/add' 
        element={<AuthenticationGuard component={()=>(
            <NewToDo 
            task={task} 
            description={description} 
            setTaskList={setTaskList} 
            setTask={setTask} 
            setDescription={setDescription} 
            taskList={taskList}/>
            )}
        />
        }
        />
        <Route path='/display' element={<DisplayTasks taskList={taskList} setTaskList={setTaskList} />}/>
        <Route path='/edit' element={<EditToDo task={task} description={description} setTaskList={setTaskList} setTask={setTask} setDescription={setDescription} taskList={taskList} />}/>
        
        </Routes>
        </>
    )
    
}
export default app;