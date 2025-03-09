import React, {useState, useContext} from 'react'
import {Container, Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavigate from './NavBar';
import '../app.css'
import TaskContext from '../context/TaskContext';






const EditToDo:React.FC=()=>{
    const [description, setDescription] = useState<string>('')
    const [task, setTask] = useState<string>('')
    const [complete, setCompleted] = useState<boolean>(false)
    const [id,setId]= useState<any>('')
    const {TodoList, setTodoList} = useContext(TaskContext);
   
    

    const HandleSubmit =(e:React.FormEvent, id:number) =>{
        e.preventDefault();
        
        const newList = TodoList.filter((task) => task.id!==id)
        console.log('test', complete)
        const addToList = [...newList, {id, task, description,completed:complete}]
        setTodoList(addToList)
        
      
        setTask('')
        setDescription('')
        setId('')
        setCompleted(false)
        

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
            {myTask.completed?
            (<Form.Check
                className='p-3 m-3 '
                type='checkbox'
                label='Completed'
                checked={true}
                onChange={()=>
                setCompleted(!complete)}/>):
            (<Form.Check
                className='p-3 m-3 '
                type='checkbox'
                label='Completed'
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

