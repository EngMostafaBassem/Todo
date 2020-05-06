import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {markTask} from '../redux/actions/actionTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash} from '@fortawesome/free-solid-svg-icons'
import {deleteTask} from '../redux/actions/actionTodo'
const Todoitem=({name,status,taskIndex})=>{

const dispatch=useDispatch()
const [checked,setChecked]=useState(false)
const markFun=(e,index)=>{
console.log(e)
setChecked(true)
dispatch(markTask(index))
}
return(
    
    <div className="todoItem_container">
        <div className="row">
        <input  type="checkbox" id="mark" name ="mark"  checked={checked?true:false} onChange={(e)=>markFun(e,taskIndex)}/>
       <label style={{textDecoration:status?'line-through':'none'}} >{name}</label>
       <FontAwesomeIcon icon={faTrash} color='#555' cursor='pointer' className="icon" onClick={()=>{dispatch(deleteTask(taskIndex)) ;setChecked(false)}} />
     
      </div>
    
    </div>
)

}

export default Todoitem