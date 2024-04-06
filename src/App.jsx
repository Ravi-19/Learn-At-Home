import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import JobPortal from './pages/jobportal/JobPortal';
import Experience from './pages/experience/Experience';
import Career from './pages/career/Career';
import Contact from './pages/conactus/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/courses'  element={<Courses/>}/>
      <Route path='/jobportal'  element={<JobPortal/>}/>
      <Route path='/experience'  element={<Experience/>}/>
      <Route path='/career'  element={<Career/>}/>
      <Route path='/contactus'  element={<Contact/>}/>
      
      
    </Routes>
    </>
  )
}

export default App
