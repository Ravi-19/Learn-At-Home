import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Playground from './pages/jobportal/Playground';
import Career from './pages/career/Career';
import Contact from './pages/conactus/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AiTutor from './pages/experience/AiTutor';


function App() {
  return (
    <div style={{position:'relative'}}>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Register/>}/> 
      <Route path='/courses'  element={<Courses/>}/>
      <Route path='/playground'  element={<Playground/>}/>
      <Route path='/aitutor'  element={<AiTutor/>}/>
      <Route path='/career'  element={<Career/>}/>
      <Route path='/contactus'  element={<Contact/>}/>
      
      
    </Routes>
    </div>
  )
}

export default App
