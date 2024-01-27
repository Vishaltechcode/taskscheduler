import React from 'react'
// import Task from './Task'

function Tasks(props) {
  return(
    <div>{
        
        props.mytasks ? props.mytasks.map((task,index)=> {
              return <task key={index} task={task}/>
        }):"you don't have tasks"
        }
         </div>
  )
}

export default Tasks
