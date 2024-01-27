 import React from 'react'
 import {useState} from 'react';
 
 function AddTask() {

    let initialtask = {
        taskid:'',
        taskname:'',
        taskstatus:''
    }


const [task,setTask] = useState(initialtask);

   return (
     <div>
        <input type= "text"
        value={task.taskname} 
        onChange={(e)=> setTask({
        taskid:Math.floor(Math.random()*6)+1,
        taskname:e.target.value,
        taskstatus:'not yet started'
        })}/>

     <button onClick={()=> {console.log(task)}}>add task</button>
     </div>

   )
 }
 
 export default AddTask