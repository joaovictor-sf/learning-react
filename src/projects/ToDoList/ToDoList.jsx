import React, {useState} from 'react'

function ToDoList() {

    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== ''){
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);//remove the task at the given index
        setTasks(newTasks);
    }

    function moveUp(index){
        if(index > 0){
            const newTasks = [...tasks];//copy of the tasks array
            const temp = newTasks[index];//store the task to be moved
            newTasks[index] = newTasks[index - 1];//move the task up
            newTasks[index - 1] = temp;//move the task
            setTasks(newTasks);//update the tasks array
        }
    }

    function moveDown(index){
        if(index < tasks.length - 1){
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = temp;
            setTasks(newTasks);
        }
    }

  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div className='input-container'>
            <input type='text' value={newTask} onChange={handleInputChange} placeholder='Enter new text'/>
            <button onClick={addTask} className='add-btn'>Add Task</button>
        </div>

        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button onClick={() => removeTask(index)} className='delete-btn'>Delete</button>
                    <button onClick={() => moveUp(index)} className='move-btn'>👆</button>
                    <button onClick={() => moveDown(index)} className='move-btn'>👇</button>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default ToDoList