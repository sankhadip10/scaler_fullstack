import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {

  // const[count,setCount] =useState(0)
  return (
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click me</button> */}
      <Home />
    </div>
  )
}

export default App
