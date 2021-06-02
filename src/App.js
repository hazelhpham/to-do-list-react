import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {
      const [tasks,setTasks] = useState([
        {id:1,text:"Learn React",day:'2/6/2021',reminder:true,},
        {id:2,text:"Email professor",day:'2/6/2021',reminder:true,},
        {id:3,text:"Exercise",day:'2/6/2021',reminder:true,},
        {id:4,text:"Internships",day:'2/6/2021',reminder:false,},
    ])

    //Add Task
    const addTask = (task) =>{
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id,...task}
      setTasks([...tasks, newTask])
    }

    //the logic behind this setState function
    //change the state of the list of tasks
    //filter out: only showing the id that is different from the selected it 
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
    //Toggle reminder
    const toggleReminder = (id) =>{
      setTasks(tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder} : task))
    }
  return (
    <div className="container">
        <Header title="Task Tracker"/>
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
    // always in the big div className App 
    //if x is true return yes; otherwise no

  );
}


export default App;
