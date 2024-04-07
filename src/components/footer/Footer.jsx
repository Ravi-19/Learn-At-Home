import { Link } from "react-router-dom"
import './Footer.css'
import { MdOutlineMail } from "react-icons/md";
import logo from '../../assets/logo.png'

function Footer() {
  return (
    
    <div className="footerContainer">
        <footer className="footer">
            <div className="footerLogo">
            <img width='200px' height='200px' src={logo}/></div>
            <div className="quickLinks">
                <h3>Quick Links</h3>
                <div className="insideQuickLinks" >
                    <Link className="linkk" to='/'>Home</Link>
                    <Link className="linkk" to='/courses'>Courses</Link>
                    <Link className="linkk" to='/career'>Career</Link>
                    <Link className="linkk" to='/contactMe'>Contact Us</Link>
                </div>
            </div>
            <div className="legal">
                <h3>Legal</h3>
                <div className="insideQuickLinks">
                <div className="linkk">Privacy Policy</div>
                <div className="linkk">Terms of use</div>
                <div className="linkk">Refund or cancellation Policy</div>

                </div>
            </div>
            <div className="contactHere">
                <h3> Get In Touch</h3>
                <p><MdOutlineMail/>ravishekhawatofficial@gmail.com</p>
                <p><MdOutlineMail/>abhishekofficial7050@gmail.com</p>
            </div>

        </footer>
    <div className="copyright">Copyright © 2024 Sorting Learn At Home Technologies Pvt Ltd. All Rights Reserved.</div>
    </div>

   

  )
}

export default Footer