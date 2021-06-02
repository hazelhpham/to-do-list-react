// const tasks = [
//     {id:1,text:'Learn React',day:'2/6/2021',reminder:true,},
//     {id:2,text:'Email professor',day:'2/6/2021',reminder:true,},
//     {id:3,text:'Fuck you',day:'2/6/2021',reminder:true,},
//     {id:4,text:'Internships',day:'2/6/2021',reminder:false,},
// ] 
//use STATE for database
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
           {tasks.map((task)=>
            (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))
           }
        </>
    )
}

export default Tasks
