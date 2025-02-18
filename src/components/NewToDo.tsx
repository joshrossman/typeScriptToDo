import React, {useState} from 'react'
import {Container, Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


interface Todo  {
    id: number;
    task: string;
    description?:string;
    completed: boolean;
}



interface NewToDoProps{
    task:string,
    description:string,
    newTaskList:Function,
    newTask:Function,
    newDescription:Function,
    taskList: Todo[];
}



const NewToDo:React.FC<NewToDoProps>=(task:string,description:string,newTaskList:Function,newTask:Function,newDescription:Function,taskList:Todo[])=>{
    
   



    const HandleSubmit =(e:React.FormEvent) =>{
        e.preventDefault()
        const newTodoItem = {
            id: Date.now(),
            task: task,
            description: description,
            completed: false
        }
        newTaskList([...taskList,newTodoItem]);
        newTask('')
        newDescription('')


    }

    return(
        <Container className='justify-content-center align-center'>
        
        <Form>
        <Row>
        <Form.Control
            className='p-3 m-3'
            type='text'
            placeholder='New Task'
            value={task}
            onChange={(e)=>newTask(e.target.value)}>  
        </Form.Control>
        </Row>
        <Row>
        <Form.Control
            className='p-3 m-3'
            type='text'
            placeholder='Description'
            value={description} 
            onChange={(e)=>newDescription(e.target.value)}/>
        </Row>
        <Row>
        <Form.Control
            className='p-3 m-3 bg-info'
            type='submit' 
            onClick={HandleSubmit} />
        </Row>
        
     

        
        </Form>
        
        
        </Container>
    )
}
export default NewToDo

