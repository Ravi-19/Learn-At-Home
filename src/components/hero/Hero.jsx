import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero-bg.png'; 
import './Hero.css'
function Hero() {
  return (
        <div className="hero">
            <div className="left">
                <h2>Keep Learning And Growing ...</h2>
                <p>Learn At Home is the one-stop destination for your upskilling journey. Brace yourself to find the best job-ready courses and high-end technologies available in the sector. And if that weren't good enough, get the highest quality course content at the most affordable prices!
What are we waiting for ? Let's push Start!</p>
                <button><Link to='/courses' className='heroLink'>Explore Courses</Link></button>

            </div>
            <div className="right">
                <img  src={heroImg}/>
            </div>
            
        </div>
  )
}

export default Hero