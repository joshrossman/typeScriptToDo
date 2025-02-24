

interface Todo  {
    id: number;
    task: string;
    description?:string;
    completed: boolean;
}

interface NewToDoProps{
    task:string,
    description:string,
    completed:boolean,
    setTaskList:Function,
    setTask:Function,
    setDescription:Function,
    taskList: Todo[];
}