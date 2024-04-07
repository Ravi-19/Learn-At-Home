import { GoArrowRight } from 'react-icons/go'
import './Journey.css'
import { useNavigate } from "react-router-dom";

function Journey() {
    const navigate = useNavigate();
  return (
    <>
    <div className='journeyContainer'>
        <div className="journeyLeft">
            <h2>Guiding You At Every Step!</h2>
            <p>Our Top Mentors show you the way,<br/>
            to becoming a thorough professional!
            </p>
            <div className="firstImg">
                <img  src='https://pwskills.com/images/homePage/offerbanner/amazon-logo.svg' />
                <img  src='https://pwskills.com/images/homePage/offerbanner/google-logo.svg'/>
                <img  src='https://pwskills.com/images/homePage/offerbanner/walmart-logo.svg'/>
            </div>
            <div className="journeySecond firstImg">
                <img  src='https://pwskills.com/images/homePage/offerbanner/microsoft-logo.svg'/>
                <img  src='https://pwskills.com/images/homePage/offerbanner/linkedin-logo.svg'/>
            </div>
            <p> & more</p>
            <button onClick={()=> navigate('/courses')} >Expolore <GoArrowRight /> </button>
            <p className='' style={{color:"white"}}>skip <GoArrowRight /> </p>
        </div>
        <div className="right">
            <img src='https://images.pexels.com/photos/5483070/pexels-photo-5483070.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </div>
        <div className="circle">
            <p >“Your</p>
            <p style={{fontSize:'1.5rem'}}>Aspiration</p>
            <p>is our goal”</p>
        </div>
    </div>

    <div className='journeyContainer'>
        <div style={{backgroundColor:'#00AB66'}} className="journeyLeft">
            <h2>One Stop Destination For All Placement Needs</h2>
            <p>Resume Support, Mock Interview,
                Exclusive Job Offers!
            </p>
            <div className="hiring">
                <img src='https://pwskills.com/images/homePage/offerbanner/trophy.png' />
                <p style={{color:'white'}}>500+ Hiring Partners</p>
            </div>
            <div  className="placement">
                <img src='https://pwskills.com/images/homePage/offerbanner/placement.png' />
                <p style={{color:'white'}}>1500+ Placements</p>
            </div>
            <p> & more</p>
            <button onClick={()=> navigate('/courses')} >Expolore <GoArrowRight /> </button>
            <p className='' style={{color:"white"}}>skip <GoArrowRight /> </p>
        </div>
        <div className="right">
            <img width={'100%'} height={'100%'} src='https://images.unsplash.com/photo-1543269665-7821011040ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
        <div style={{backgroundColor:'rgb(121 190 67)'}} className="circle">
            <p >“From
</p>
            <p style={{fontSize:'1.5rem'}}>Learning</p>
            <p>To Earning”</p>
        </div>
    </div>
    
</>
  )
}

export default Journey