import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='navBar'>
        <div className='up'>
            <h1 className='logo'>
                Learn At Home 
            </h1>
            <input className='navInput' type='text' placeholder='search your course here ...'/>
            <button className='navBtn'>Login/Register</button>
        </div>
        <div className='down'>
          <Link to={'/'} className='link'>Home</Link>
          <Link to={'/courses'} className='link'>Courses</Link>
          <Link to={'/jobportal'} className='link'> Job Portal</Link>
          <Link to={'/experience'} className='link'>Experience Portal</Link>
          <Link to={'/career'} className='link'>Career</Link>
          <Link to={'/contactus'} className='link'>Contact Us</Link>

        </div>
    </nav>
  )
}

export default Navbar