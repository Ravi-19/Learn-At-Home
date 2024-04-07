import { GoArrowRight } from "react-icons/go";
import StudyCard from "../../components/studycard/StudyCard";
import "./Courses.css";

function Courses() {
  return (
    <>
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
    </>
  );
}

export default Courses;
