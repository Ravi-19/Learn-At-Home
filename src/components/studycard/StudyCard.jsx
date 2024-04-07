import mathaImg from "../../assets/maths.jpg";
import chemistryImg from "../../assets/chemistry.jpg";
import physicsImg from "../../assets/physics.jpg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import './StudyCard.css'
function StudyCard() {
  return (

    <div className="mainContainer">
    <div className="coursePagesContainer"> 

    <div className="course-Page">
      <div className="courseImage">
        <img src={mathaImg} />
      </div>
      <div className="courseDetails">
        <h3>Full Maths Syllabus</h3>
        <div className="details">
        <FaChalkboardTeacher />
          <h4>Vishwa Mohan</h4>
        </div>

        <div className="details">
        <IoIosTime />
          <h4>Start on 20 martch 2024</h4>
        </div>

        <div className="details">
        <IoNewspaper />
          <h4>Sample Papers</h4>
        </div>
      </div>
      <div className="courseEnroll">
        <div className="price"> $ 2000/-</div>
        <div className="btns">
        <button  style ={{backgroundColor:'	#F9F6EE', color:'orangered'}}className="courseEnrollBtns">Explore</button>
        <button className="courseEnrollBtns">Enroll</button>
        </div>
      </div>
    </div>
    <div className="course-Page">
      <div className="courseImage">
        <img src={physicsImg} />
      </div>
      <div className="courseDetails">
        <h3>Full Physics Course</h3>
        <div className="details">
        <FaChalkboardTeacher />
          <h4>Vishwa Mohan</h4>
        </div>
         
        <div className="details">
        <IoIosTime />
          <h4>Start on 20 martch 2024</h4>
        </div>

        <div className="details">
        <IoNewspaper />
          <h4>Sample Papers</h4>
        </div>
      </div>
      <div className="courseEnroll">
        <div className="price"> $ 2000/-</div>
        <div className="btns">
        <button style ={{backgroundColor:'	#F9F6EE', color:'orangered'}} className="courseEnrollBtns">Explore</button>
        <button className="courseEnrollBtns">Enroll</button>
        </div>
      </div>
    </div>

    <div className="course-Page">
      <div className="courseImage">
        <img src={chemistryImg} />
      </div>
      <div className="courseDetails">
        <h3>Full Chemistry Course</h3>
        <div className="details">
        <FaChalkboardTeacher />
          <h4>Vishwa Mohan</h4>
        </div>

        <div className="details">
        <IoIosTime />
          <h4>Start on 20 martch 2024</h4>
        </div>

        <div className="details">
        <IoNewspaper />
          <h4>Sample Papers</h4>
        </div>
      </div>
      <div className="courseEnroll">
        <div className="price"> $ 2000/-</div>
        <div className="btns">
        <button style ={{backgroundColor:'	#F9F6EE', color:'orangered'}} className="courseEnrollBtns">Explore</button>
        <button className="courseEnrollBtns">Enroll</button>
        </div>
      </div>
    </div>

    </div>  

    </div>
  );
}

export default StudyCard;
