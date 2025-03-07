import React, {useState, useContext} from 'react'
import {Container, Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavigate from './NavBar';
import '../app.css'
import TaskContext from '../context/TaskContext';






const EditToDo:React.FC=()=>{
    const [description, setDescription] = useState<string>('')
    const [task, setTask] = useState<string>('')
    const [completed, setCompleted] = useState<boolean>(false)
    const [id,setId]= useState<any>('')
    const {Todo, setTodo, TodoList, setTodoList} = useContext(TaskContext);
   
    

    const HandleSubmit =(e:React.FormEvent, id:number) =>{
        e.preventDefault();
        
        const newList = TodoList.filter((task) => task.id!==id)
        const addToList = [...newList, {id:id, task:task, description:description,completed:completed}]
        setTodoList(addToList)
        
        console.log(id)
        console.log(e)
        
        setTask('')
        setDescription('')
        setId('')
        

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
        
            {TodoList.map((myTask)=>(myTask.task===task &&
            <>
                <Row>
            <Form.Control
                className='p-3 m-3'
                type='text'
                placeholder='Description'
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}/>
            </Row>
            <Row>
            
        <Row>
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
            </Row>
        </Row>
        </>
            ))}
        
            
     

        
        </Form>
        
        
        </Container>
        </>
    )
}
export default EditToDo

