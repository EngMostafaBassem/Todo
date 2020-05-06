import React,{useRef, useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './Todo.css'
const TodoForm=({showFun})=>{

    const inputRef=useRef()
    const dispatch=useDispatch()
    
const addTask=(e,task)=>{
    e.preventDefault()
    showFun(false)
    inputRef.current.value=''
    
    dispatch({type:'addTask',payload:task})
}



    return(
        <div className='form-container'>
            <form onSubmit={(e)=>addTask(e,inputRef.current.value)}>
                 <input  ref={inputRef} placeholder="Enter your new task here..."/>
                 <button type="submit"  >Add</button>
                          
            </form>
        </div>
    )
}
 export default TodoForm