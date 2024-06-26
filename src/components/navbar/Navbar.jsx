import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate() ; 
  return (
    <nav className='navBar'>
        <div className='up' >
            <div className='logo' onClick={()=> navigate('/')}>
                <img width='70px' height='60px' src={logo}/>
            </div>
            <input className='navInput' type='text' placeholder='search your course here ...'/>
            <button className='navBtn' onClick={()=>navigate('/login')}>Login/Register</button>
        </div>
        <div className='down'>
          <Link to={'/'} className='link'>Home</Link>
          <Link to={'/courses'} className='link'>Courses</Link>
          <Link to={'/playground'} className='link'> Playground</Link>
          <Link to={'/aitutor'} className='link'>AI Tutor</Link>
          <Link to={'/career'} className='link'>Career</Link>
          <Link to={'/contactus'} className='link'>Contact Us</Link>

        </div>
    </nav>
  )
}

export default Navbar