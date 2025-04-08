import React, {useState, useContext} from 'react';
import { TaskProvider } from './context/TaskContext';
import NewToDo from './components/NewToDo';
import DisplayTasks from './components/DisplayTasks'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home';
import EditToDo from './components/EditToDo';
import AuthenticationGuard from './components/AuthenticationGaurd';
import Callback from './components/Callback'


interface Todo{
    id:number,
    task:string,
    description:string,
    completed:boolean
}


const App =()=>{
    
    const [todo, setTodo] = useState<Todo>({
        id:0,
        task:'',
        description:'',
        completed:false
    });
     
    const [todoList,setTodoList] = useState<Todo[]>([]);

  
     
    return(
        <>
        <TaskProvider >
        <Routes>
        <Route path='/callback' element={<Callback />} />
        <Route path='/' element={<Home />} />
        <Route 
        path='/add' 
        element={<AuthenticationGuard component={NewToDo} /> } />
        <Route path='/display' element={<DisplayTasks />}/>
        <Route path='/edit' element={<EditToDo />}/>
        
        </Routes>
        </TaskProvider>
        </>
    )
    
}
export default App;