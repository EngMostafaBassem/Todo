import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import './Todo.css'

const Todo=()=>{
  const [show,setShow]=useState(false)
  const showFun=(val)=>setShow(val)
    return(
        <div  className="todo_container">

            <button className="btn-generate" onClick={()=>setShow(true)} >+ New Task </button>
{
    show&&<TodoForm  showFun={showFun}/>
}
            
            <TodoList/>
        </div>
    )
}
 export default Todo