 import './Contact.css'
 
function Contact() {
  return (
    <div className="mainContactContainer">
    <div className='contactUsPage'>
   <div className="LeftcontactUs">
    <h1 className='contactUsTittle'>Contact Us </h1>

    <div className="contactDetail"> Email : learnathome@code.com</div>
    <div className="contactDetail"> Email : ravishekhvatofficial@gmail.com</div>
    <div className="contactDetail"> Email : abhishekofficial7050@gmail.com</div>
    <div className="contactDetail">Phone Number : 12345</div>
    <div className="contactDetail">Head Office : Rai Industrial Area  Delhi- 233489</div>
    
   </div>

     <div className="RightContactUs">
       <div className="form">
         <label htmlFor="nameInput"> Enter Your Name</label>
         <input
           className="nameInput"
           type="text"
           placeholder="Enter your Name"
         />

         <label htmlFor="emailInput"> Enter Your Email</label>
         <input
           className="emailInput"
           type="email"
           placeholder="Enter Your Email"
         />

         <label htmlFor="numberInput"> Enter Your Mob. Number</label>
         <input
           className="numberInput"
           type="numbers"
           placeholder="Enter your mobile number"
         />
         <label htmlFor="query">You can share your query</label>
         <textarea name="query" id="query" cols="40" rows="10"></textarea>
         
         <input className='submitBtn' type="submit" />
       </div>
     </div>
     </div>
   </div>
  )
}

export default Contact