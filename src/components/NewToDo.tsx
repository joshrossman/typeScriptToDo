import React, {useState} from 'react'
import {Container, Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Todo, newToDoProps} from '../Models/TaskInterface'
import MyNavigate from './NavBar';





const NewToDo:React.FC<NewToDoProps>=({task,description,completed, setTaskList,setTask,setDescription,taskList})=>{
    
   
    

    const HandleSubmit =(e:React.FormEvent) =>{
        e.preventDefault()
        const newTodoItem = {
            id: Date.now(),
            task: task,
            description: description,
            completed: completed
        }
        setTaskList([...taskList,newTodoItem]);
        setTask('')
        setDescription('')


    }

    return(
        <>
        <MyNavigate />
        <Container className='justify-content-center align-center'>
        
        <Form>
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
            
        <Form.Control
            className='p-3 m-3 bg-info'
            type='submit' 
            onClick={HandleSubmit} />
        </Row>
        
     

        
        </Form>
        
        
        </Container>
        </>
    )
}
export default NewToDo

