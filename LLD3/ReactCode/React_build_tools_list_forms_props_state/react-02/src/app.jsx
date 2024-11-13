// import React from "react";
// import Counter from "./components/counter";
import { useState } from 'react';
import './app.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import TodoItem from './components/todo-item';
// function Counter() {
//     return (
//         <div>
//             <h3>Counter component</h3>
//         </div>
//     )
// }
//you can only return one elememnt
function App() {
    const[todos,setTodos] = useState([])

    const[todoText,setTodoText]=useState('')

    // console.log('User is typing',todoText)
    function handleCreateButtonClick(){
        todos.push({
            id:Date.now().toString(),
            todo:todoText,
            isCompleted:false
        })
        setTodos(todos)
    }
    return (
        // <div>
        //     {/* <h1>Hello from App Component</h1>
        //     <h2>Hello from sankha</h2>

        //     <Counter></Counter> */}


        // </div>
        <div className='container'>
            <div className="todo-container">
                <div className='input-container'>
                    <TextField value={todoText} onChange={(e)=>setTodoText(e.target.value)} fullWidth variant="filled" placeholder='Enter your todo here'/>
                    <Button onClick={handleCreateButtonClick} variant="contained">Create </Button>
                </div>
                <div>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>
        </div>

    );
}

export default App