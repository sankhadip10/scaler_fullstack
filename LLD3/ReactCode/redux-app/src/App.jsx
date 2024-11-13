import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useDispatch,useSelector} from "react-redux"
import { increment } from './redux/slices/counterSlice'
import { fetchAllTodos } from './redux/slices/todoSlice'
import { useEffect } from 'react'
function App() {

  const dispatch = useDispatch()
  const value = useSelector((store)=>store.counter.count);
  const todoStore = useSelector((store)=>store.todo);

  useEffect(()=>{
    dispatch(fetchAllTodos())
  },[])
  // console.log(value)
  if (todoStore.isLoading) return <h2>Loading...</h2>
  if (todoStore.error) return <h2>Error{todoStore.error}</h2>
  return (
    <>
      <div>
        {/* <button onClick={()=>dispatch(fetchAllTodos())}>Fetch</button> */}
        <h1>Todos</h1>
        {todoStore.data.map((todo) =><li key={todo.id}>{todo.title}</li>)}
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>dispatch(increment())}>
          count is {value}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
