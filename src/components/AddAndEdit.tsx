import React from 'react'
import TaskContext from './TaskContext';

interface Todo  {
    id: number;
    task: string;
    description?:string;
    completed: boolean;
}

const AddAndEdit = () => {
    if(newTask.trim()!==''){
        const newTodo: TaskContext= {
            id:Date.now(),
            task:newTask,
            completed:false,
        };

        setTodos([...todos,newTodo]);
        setNewTask('');
    }
    return(
        <>
        Hello
        </>
    )
};

export default AddAndEdit;