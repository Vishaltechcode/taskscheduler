 import React from 'react'
 
 function Task(props) {
   return (
     <div>
        
        <span className='task'> task id : </span><span>{props.task.taskid}</span>
        <span className='task'> task name : </span><span>{props.task.taskiname}</span>
        <span className='task'> task status : </span><span>{props.task.status}</span>
        <button>edit</button>
        <button>delete</button>
        {/* <button>edit</button> */}

        </div>
   )
 }
 
 export default Task