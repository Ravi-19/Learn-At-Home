import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero-bg.png'; 
import './Hero.css'
function Hero() {
  return (
        <div className="hero">
            <div className="left">
                <h2>Keep Learning And Growing ...</h2>
                <p>reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis ea quos ex sit sint deleniti ducimus quam explicabo necessitatibus. ullam unde facilis repellat? Rem distinctio iure ducimus earum! Quibusdam, magnam perspiciatis. Autem alias eaque iure.</p>
                <button><Link to='/courses' className='heroLink'>Explore Courses</Link></button>

            </div>
            <div className="right">
                <img  src={heroImg}/>
            </div>
            
        </div>
  )
}

export default Hero