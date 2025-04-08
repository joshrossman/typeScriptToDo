import React, {useState, useEffect} from 'react'
import {Container, Form,  Row,  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavigate from './NavBar';
import '../app.css'
import { useTaskContext } from '../context/TaskContext';






const EditToDo:React.FC=()=>{
    const [description, setDescription] = useState<string>('')
    const [task, setTask] = useState<string>('')
    const [newTask, setNewTask] = useState<string>('')
    const [complete, setCompleted] = useState<boolean>(false)
    const [id,setId]= useState<any>('')
    const { tasks, dispatch} = useTaskContext();
   
    

    const HandleSubmit =(e:React.FormEvent, id:number) =>{
        e.preventDefault();
        
        const selectedTask = tasks.find((myTask) => myTask.id===id)
        if (selectedTask){
            const editedTask = {id:selectedTask.id,task:newTask,description:description,completed:complete}
            dispatch({type:"EDIT_TASK",payload:editedTask})
        }
        setTask('')
        setNewTask('')
        setDescription('')
        setId('')
        setCompleted(false)

    }

    const setUpEdit =(name:string) => {
        setTask(name);
        setNewTask(name);
        const holdTodo = tasks[tasks.findIndex((task)=>task.task===name)]
        setDescription(holdTodo.description);
        setCompleted(holdTodo.completed);
    }

    return(
        <>
        <MyNavigate />
        <Container className='justify-content-center align-center'>
        <select 
        className="p-3 m-3 justify-content-left " 
        onChange={(e)=>{setUpEdit(e.target.value)}}>
        <option>Select Task to Edit</option>
        {tasks.map(
                (myTask)=>
                   (
            <option key={myTask.id} >{myTask.task}</option>))}
        </select>
        <Form>
        <Row>
        <Form.Control
            className='p-3 m-3'
            type='text'
            placeholder='Edit Task'
            value={newTask}
            onChange={(e)=>{setNewTask(e.target.value)}}>  
        </Form.Control>
        </Row>
            
            {tasks.map(
                (myTask)=>
                    (myTask.task===newTask || myTask.task===task) &&(
            <div key={myTask.id}>
                <Row>
        
            <Form.Control
                className='p-3 m-3'
                type='text'
                placeholder='Description'
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}/>
        
            </Row>
            <Row>
            {complete?
            (<Form.Check
                className='p-3 m-3 '
                type='checkbox'
                label='Completed?'
                checked={true}
                onChange={()=>
                setCompleted(!complete)}/>):
            (<Form.Check
                className='p-3 m-3 '
                type='checkbox'
                label='Completed?'
                checked={false}
                onChange={()=>
                setCompleted(!complete)}/>)
    }
    
            </Row>
           
        <Form.Control
            className='p-3 m-3 bg-info '
            type='submit' 
            onClick={(e)=>HandleSubmit(e, myTask.id)} 
             />
             <Form.Control
                className='p-3 m-3 invisible'
                type='text'
                placeholder='Description'
                value={myTask.id} 
                onChange={(e)=>setId(e.target.value)}/>
        </div>
        
            ))}
        </Form>
        </Container>
        </>
    )
}
export default EditToDo

