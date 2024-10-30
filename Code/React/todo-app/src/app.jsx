import "./app.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import TodoItem from "./components/todo-item";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  
  function handleCreateButtonClick() {
    if(!todoText) return
    const newArr=[
        ...todos,
        {id:Date.now().toString(),
        todo:todoText,
        isCompleted:false},
    ];
    setTodos(newArr)
    setTodoText('')
  }

  console.log('Todos of user',todos)

  return (
    <div className="container">
      <div className="todo-container">
        <div className="input-container">
          <TextField
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            fullWidth
            variant="filled"
            placeholder="Enter your todo here"
          />
          <Button onClick={handleCreateButtonClick} variant="contained">Create</Button>
        </div>
        <div>
          {todos.map((e,index) => <TodoItem onToggle={check=>{
            const newArr =[...todos]
            newArr[index].isCompleted = check
            setTodos(newArr)
          }}
          checked={e.isCompleted}
          key={e.id} 
          content={e.todo} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
