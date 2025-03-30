import React, {useState, useContext, useEffect} from 'react'
import {Container, Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavigate from './NavBar';
import '../app.css'
import TaskContext from '../context/TaskContext';
import DisplayTasks from './DisplayTasks';






const EditToDo:React.FC=()=>{
    const [description, setDescription] = useState<string>('')
    const [task, setTask] = useState<string>('')
    const [complete, setCompleted] = useState<boolean>(false)
    const [id,setId]= useState<any>('')
    const {TodoList, setTodoList} = useContext(TaskContext);
   
    useEffect(()=>{
        const selectedTask = TodoList.find((myTask)=> myTask.task ===task);
        if (selectedTask){
            setDescription(selectedTask.description)
            setTask(selectedTask.task)
            setId(selectedTask.id)
        }
    }, [task,TodoList]);

    const HandleSubmit =(e:React.FormEvent, id:number) =>{
        e.preventDefault();
        
        const selectedTask = TodoList.find((myTask) => myTask.id===id)
        if (selectedTask){
            selectedTask.task=task,
            selectedTask.description=description,
            selectedTask.completed=complete;

        }
        
        
        
      
        setTask('')
        setDescription('')
        setId('')
        setCompleted(false)
        

    }

    return(
        <>
        <MyNavigate />
        <Container className='justify-content-center align-center'>
        <select 
        className="p-3 m-3 justify-content-left " 
        onChange={(e)=>setTask(e.target.value)}>
        <option>Select Task to Edit</option>
        {TodoList.map(
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
            value={task}
            onChange={(e)=>{setTask(e.target.value)}}>  
        </Form.Control>
        </Row>
            
            {TodoList.map(
                (myTask)=>
                    myTask.task===task &&(
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

