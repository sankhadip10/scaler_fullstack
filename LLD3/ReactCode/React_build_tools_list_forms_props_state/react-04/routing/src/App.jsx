
import './App.css'
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import HomePage from './pages/home-page'
import ContactPage from './pages/contact-page'
import ClassRoom from './pages/classrom-session-page'
function App() {

  // const pathname = window.location.pathname

  return (
    // <>
    //   {pathname==='/' && <h6>This is a hoax</h6>}
    //   {pathname==='/home' && <h6>This is a home page</h6>}
    //   {pathname==='/contact' && <h6>This is a contact page</h6>}
    // </>
    <div>
      <nav style={{display:'flex',gap:'10px'}}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/mentee/class/1/session">Join Class</Link>

      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/mentee/class/:classId/session' element={<ClassRoom />} />
        <Route path="/home" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  )
}

export default App
