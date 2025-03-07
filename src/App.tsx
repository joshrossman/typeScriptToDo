import React, {useState, useContext} from 'react';
import TaskContext from './context/TaskContext';
import NewToDo from './components/NewToDo';
import DisplayTasks from './components/DisplayTasks'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home';
import EditToDo from './components/EditToDo';
import AuthenticationGuard from './components/AuthenticationGaurd';
import Callback from './components/Callback'




const app =()=>{
 
     
    const {Todo, setTodo, TodoList, setTodoList} = useContext(TaskContext);
     
    return(
        <>
        <TaskContext.Provider value={{Todo, setTodo, TodoList, setTodoList}}>
        <Routes>
        <Route path='/callback' element={<Callback />} />
        <Route path='/' element={<Home />} />
        <Route 
        path='/add' 
        element={<AuthenticationGuard component={NewToDo} /> } />
        <Route path='/display' element={<DisplayTasks />}/>
        <Route path='/edit' element={<EditToDo />}/>
        
        </Routes>
        </TaskContext.Provider>
        </>
    )
    
}
export default app;