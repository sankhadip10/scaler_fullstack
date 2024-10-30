import Checkbox from '@mui/material/Checkbox';
import './todo-item.css'
const TodoItem=(props)=>{
    return(
        <li className='todo-item-container'>
            <Checkbox checked={props.checked}onChange={e=>props.onToggle(e.target.checked)}/>
            <p style={{textDecoration: props.checked?'line-through':undefined}}>{props.content}</p>
        </li>
    )
}

export default TodoItem