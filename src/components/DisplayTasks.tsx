import React, {useContext, useState} from 'react'
import {Card, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Todo} from '../Models/TaskInterface'
import MyNavigate from './NavBar';
import TaskContext from '../context/TaskContext';



interface DisplayProps{
    setTaskList: Function,
    taskList: Todo[];
}

interface RemoveProps{
    id:Number
}
    
  
const DisplayTasks:React.FC =()=>{
    const {Todo, setTodo, TodoList, setTodoList} = useContext(TaskContext);
    const changeStatus = (id:number, complete:boolean)=>{
        const newList = TodoList.map((myTask)=>myTask.id===id?
        ({...myTask,complete:(!myTask.completed)}):
        (myTask))
        setTodoList(newList);
    }
    const removeTask = (id:number) =>{
        const newList = TodoList.filter((task) =>task.id!==id)
        setTodoList(newList);

    }
    console.log({TodoList})
    
    return(
        <> 
            <MyNavigate />
            {TodoList.map((ToDoItem)=>
            <Card key={ToDoItem.id} className="m-4 p-3">
            {!ToDoItem.completed?
            (<Card.Title className="mx-auto">{ToDoItem.task} </Card.Title>)
            :
            (<Card.Title className="mx-auto"><del>{ToDoItem.task}</del> </Card.Title>)
            }
            <Card.Body style={{width:'100%', textAlign:'center'}} className="mx-auto bg-light mt-3 mb-3 rounded"> {ToDoItem.description}</Card.Body>
            
            {
            !ToDoItem.completed?
            (<Button  className="bg-info"  onClick={()=>changeStatus(ToDoItem.id, ToDoItem.completed)}>Mark Complete</Button>):
            (<Button  className="bg-info" onClick={()=>changeStatus(ToDoItem.id, ToDoItem.completed)} >Mark Incomplete</Button>)

            }
            <Button  className="bg-danger" onClick={() =>removeTask(ToDoItem.id)} >Remove</Button>
            </Card>
            )
            }
        </>
    )
}
export default DisplayTasks