import './todo-item.css'
import Checkbox from '@mui/material/Checkbox';

const TodoItem =() =>{
    return(
        <li className='todo-item-container'>
            <Checkbox />
            <p>Todo item</p>
        </li>
    )
}

export default TodoItem