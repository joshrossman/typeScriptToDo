import React from 'react'
import {Card, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


interface Todo  {
    id: number;
    task: string;
    description?:string;
    completed: boolean;
}

interface DisplayProps{
  
    taskList: Todo[];
}


   
const DisplayTasks:React.FC<DisplayProps> =({taskList})=>{
    return(
        <> 
            {taskList.map((ToDoItem)=>
            <Card key={ToDoItem.id} >
            <Card.Title className="justify-content-center align-center">Task -{ToDoItem.task} </Card.Title>
            <Card.Body className="bg-light"> Description - {ToDoItem.description}</Card.Body>
            <Button className="bg-danger">Remove</Button>
            </Card>
            )
            }
        </>
    )
}
export default DisplayTasks