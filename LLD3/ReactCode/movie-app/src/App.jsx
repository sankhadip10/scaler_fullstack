import { Routes, Route } from 'react-router-dom'
//pages
import HomePage from './pages/home'

//Components
import Navbar  from "./components/navbar";
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

    </>
  )
}

export default App
