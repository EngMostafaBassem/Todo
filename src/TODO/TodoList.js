import React from 'react'
import {useSelector}from 'react-redux'
import Todoitem from './Todoitem'
const TodoList=()=>{
      const tasks=useSelector((state)=>state.todoReducer)
    return(
        <div>
            {
                tasks.todo.map((item,index)=><Todoitem key={index} name={item.name} status={item.status} taskIndex={index}/>)
            }
          
        
        </div>
    )
}
 export default TodoList