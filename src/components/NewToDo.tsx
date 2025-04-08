import React, {useState} from 'react'
import {Container, Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavigate from './NavBar';
import { useContext, useEffect } from 'react'
import { useTaskContext } from '../context/TaskContext';





const NewToDo: React.FC = () =>{
    const [description, setDescription] = useState<string>('')
    const [task, setTask] = useState<string>('')
    const [completed, setCompleted] = useState<boolean>(false)
    const { dispatch} = useTaskContext();
    
        
                   
                  
        
    const HandleSubmit =(e:React.FormEvent) =>{
       

        e.preventDefault()
        const newTodoItem = {
            id: Date.now(),
            task,
            description,
            completed,
        }
        
        dispatch({type:'ADD_TASK', payload:newTodoItem});
        
        setTask('');
        setDescription('');
        setCompleted(false);
       


    }

    return(
        <>
        <MyNavigate />
        <Container className='justify-content-center align-center'>
        
        <Form onSubmit={HandleSubmit}>
        <Row>
        <Form.Control
            className='p-3 m-3'
            type='text'
            placeholder='New Task'
            value={task}
            onChange={(e)=>setTask(e.target.value)}>  
        </Form.Control>
        </Row>
        <Row>
        <Form.Control
            className='p-3 m-3'
            type='text'
            placeholder='Description'
            value={description} 
            onChange={(e)=>setDescription(e.target.value)}/>
        </Row>
        <Row>
            
        <Button
            className='p-3 m-3 bg-info'
            type='submit' 
             >Add Task
             </Button>
        </Row>
        
     

        
        </Form>
        
        
        </Container>
        </>
    )
}
export default NewToDo

