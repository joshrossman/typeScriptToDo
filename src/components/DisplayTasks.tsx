import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTaskContext } from  '../context/TaskContext'
import MyNavigate from './NavBar';
import {Todo} from '../context/TaskContext'



const DisplayTasks:React.FC =()=>{
    const { tasks, dispatch } = useTaskContext();
    const changeStatus = (id:Todo)=>{
        const myNewStatus = id;
        myNewStatus.completed=!myNewStatus.completed
        dispatch({type:'CHANGE_STATUS',payload:myNewStatus})
       
    }
    const removeTask = (id:Todo) =>{
        const toRemove = tasks[tasks.indexOf(id)]
        dispatch({type:'REMOVE_TASK', payload:toRemove});
       
    }
    
    
    return(
        <> 
            <MyNavigate />
            {tasks.map((ToDoItem)=>
            <Card key={ToDoItem.id} className="m-4 p-3">
            {!ToDoItem.completed?
            (<Card.Title className="mx-auto">{ToDoItem.task} </Card.Title>)
            :
            (<Card.Title className="mx-auto"><del>{ToDoItem.task}</del> </Card.Title>)
            }
            <Card.Body style={{width:'100%', textAlign:'center'}} className="mx-auto bg-light mt-3 mb-3 rounded"> {ToDoItem.description}</Card.Body>
            
            {
            !ToDoItem.completed?
            (<Button  className="bg-info"  onClick={()=>changeStatus(ToDoItem)}>Mark Complete</Button>):
            (<Button  className="bg-info" onClick={()=>changeStatus(ToDoItem)} >Mark Incomplete</Button>)

            }
            <Button  className="bg-danger" onClick={() =>removeTask(ToDoItem)} >Remove</Button>
            </Card>
            )
            }
        </>
    )
}
export default DisplayTasks