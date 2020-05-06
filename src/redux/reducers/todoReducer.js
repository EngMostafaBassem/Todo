const initState={
    todo:[]
}

export default function todoReducer(state=initState,action){
    const cpy={...state}
   switch(action.type)
   {
       case 'addTask':
          
        return {...state,todo:[...state.todo,{name:action.payload,status:false}]}

       case 'markTask':
          
       
            const obj= cpy.todo.splice(action.payload,1)
            obj[0].status=true;
            cpy.todo.splice(action.payload,0,obj[0])
            return {...state,...cpy}



         case 'deleteTask':   
        
         cpy.todo.splice(action.payload,1)
          return {...state,...cpy}


       default:         
           return state
   }
}
