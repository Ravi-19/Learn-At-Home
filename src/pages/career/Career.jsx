import './Career.css'

function Career() {
  return (
    <div className="mainCarearContainer">
     <div className='careerPage'>
    <div className="Left">
     <h1 className='careerTittle'>Build Your career with us !</h1>
     
    </div>

      <div className="Right">
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
          <label htmlFor="education">Your Education</label>
          <select name="education" id="education">
            <option value="B-Tech">B-Tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="12th">12th</option>
            <option value="B.Ed">B.Ed</option>
            <option value="PHd">PHd</option>
          </select>
          <input className='submitBtn' type="submit" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Career;
