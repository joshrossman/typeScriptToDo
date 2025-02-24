import React, {useState} from 'react'
import {Card, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Todo} from '../Models/TaskInterface'
import MyNavigate from './NavBar';



interface DisplayProps{
    setTaskList: Function,
    taskList: Todo[];
}

interface RemoveProps{
    id:Number
}

  
const DisplayTasks:React.FC<DisplayProps> =({taskList,setTaskList})=>{
    const changeStatus = (id:number, complete:boolean)=>{
        const newList = taskList.map((myTask)=>myTask.id===id?
        ({...myTask,complete:(!myTask.complete)}):
        (myTask))
        setTaskList(newList);
    }
    const removeTask = (id:number) =>{
        const newList = taskList.filter((task) =>task.id!==id)
        setTaskList(newList);

    }
    console.log({taskList})
    
    return(
        <> 
            <MyNavigate />
            {taskList.map((ToDoItem)=>
            <Card key={ToDoItem.id} className="m-4 p-3">
            {!ToDoItem.complete?
            (<Card.Title className="mx-auto">{ToDoItem.task} </Card.Title>)
            :
            (<Card.Title className="mx-auto"><del>{ToDoItem.task}</del> </Card.Title>)
            }
            <Card.Body style={{width:'100%', textAlign:'center'}} className="mx-auto bg-light mt-3 mb-3 rounded"> {ToDoItem.description}</Card.Body>
            
            {
            !ToDoItem.complete?
            (<Button  className="bg-info"  onClick={()=>changeStatus(ToDoItem.id, ToDoItem.complete)}>Mark Complete</Button>):
            (<Button  className="bg-info" onClick={()=>changeStatus(ToDoItem.id, ToDoItem.complete)} >Mark Incomplete</Button>)

            }
            <Button  className="bg-danger" onClick={() =>removeTask(ToDoItem.id)} >Remove</Button>
            </Card>
            )
            }
        </>
    )
}
export default DisplayTasks