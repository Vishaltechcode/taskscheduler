// import logo from './logo.svg';
import './App.css';
// import Task from './Task';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { useReducer } from 'react';
import taskReducer from './reducer/taskreducer';

function App() {

  const usertasks = [
{taskid:1,taskname:" watching ind vs pal match ",status:"not yet completed"},
{taskid:1,taskname:" learn react ",status:"in progress"},
{taskid:1,taskname:"learn cloud",status:"not yet started"},
  ]

  const [task,dispatch] = useReducer(taskReducer,usertasks);

  function handleAddTask(task){
    dispatch({
      type:'addTask',
      payload:task
    })
  }

  return (
    <div className="App">
      <h1> task scheduler </h1>
      {/* <button>addNewTask</button> */}
      <Tasks mytasks={usertasks}/>
      <task/>
      <AddTask onAddTask={handleAddTask}/>

    </div>
  );
}

export default App;
