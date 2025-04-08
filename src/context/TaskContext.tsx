import React, { createContext, useContext, ReactNode, useReducer} from 'react'

export interface Todo{
    id:number,
    task:string,
    description:string,
    completed:boolean
}

type TaskAction = 
    | {type:"ADD_TASK", payload: Todo}
    | {type :"EDIT_TASK", payload: Todo}
    | {type:"REMOVE_TASK", payload: Todo}
    | {type:"CHANGE_STATUS", payload: Todo} ;
    
interface TaskState {
    tasks: Todo[];
} 

const initialState: TaskState = {
    tasks: [],
}

const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    switch (action.type){
        case 'ADD_TASK':
            //...state--> spread the state, which in this case is the tasks. But if there are more items, then those would be spread as well.
            //[tasks: opens up the global task array, within state, state.tasks,action.payload will add the payload to the array]
            //in general would not need state here, since only one item within state, but if multiple items would need ot spread the state
            return {...state,tasks:[...state.tasks,action.payload]};
        case 'EDIT_TASK':
            const taskIndex = state.tasks.findIndex((task)=>task.id===action.payload.id)
            if (taskIndex>-1)
            {
                const updatedTasks = [...state.tasks]
                updatedTasks [taskIndex] = action.payload

                return {tasks:updatedTasks};
            }
           
        case 'REMOVE_TASK':
            return {tasks:state.tasks.filter((task)=>task.id!==action.payload.id)};

        case 'CHANGE_STATUS':
            const taskCompletedIndex = state.tasks.findIndex((task)=>task.id===action.payload.id)
            if (taskCompletedIndex>-1)
            {
                const updatedTasks = [...state.tasks]
                updatedTasks [taskCompletedIndex] = action.payload
                return {tasks:updatedTasks};
            }
        default:
            throw new Error (`Error ${Error}`)
    }
}

interface TaskContextType extends TaskState {
    dispatch: React.Dispatch<TaskAction>
}

const TaskContext = createContext<TaskContextType|undefined>(undefined);

interface TaskProviderProps{
    children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({
    children,
}) => {
    //state is the global state and dispatch is a function to change the global state.
    const [state,dispatch] = useReducer(taskReducer,initialState)

    return (
        <TaskContext.Provider value={{...state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = (): TaskContextType => {
    const context = useContext(TaskContext);
    if(!context){
        throw new Error(`Error 508`)
    }

    return context
}
