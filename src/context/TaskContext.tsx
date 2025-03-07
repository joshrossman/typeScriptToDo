import React, {useState} from 'react'


interface Todo{
    id:number,
    task:string,
    description:string,
    completed:boolean
}

interface TaskContextType{
    Todo:Todo;
    setTodo: React.Dispatch<React.SetStateAction<Todo>>;
    TodoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TaskContext = React.createContext<TaskContextType>({
    Todo:
    {
    id: 0,
    task: '',
    description:'',
    completed: false
    },

    setTodo:()=>{},

    TodoList:[],

    setTodoList:()=>{}
})

export default TaskContext