import { GoArrowRight } from "react-icons/go";
import StudyCard from "../../components/studycard/StudyCard";
import "./Courses.css";
import Footer from '../../components/footer/Footer'

function Courses() {
  return (
    <div>
      <div className="CourseContainer">
        <div className="coureses">
          <div className="header">
            <h2>Our Courses</h2>
            <button>
              view all <GoArrowRight />
            </button>
          </div>
          <div className="genre">
            <div className="trading">Trading</div>
            <div className="live">Live</div>
          </div>
        </div>
      </div>
      <StudyCard />
      <Footer/>
    </div>
  );
}

export default Courses;
