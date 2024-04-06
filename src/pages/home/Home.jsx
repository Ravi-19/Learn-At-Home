import Hero from "../../components/hero/Hero"
import Stats from "../../components/stats/Stats"
import './Home.css'

function Home() {

  return (
    <div className="container">
      {/* hero section  */}
      <Hero/>
      <div className="statsContainer">
      < Stats data="55%" text="Average Salary Hike"/>
      < Stats data="600+" text="Different Courses"/>
      < Stats data="12000+" text="Career Trainsitions"/>
      < Stats data="400+" text="Hiring Partners"/>

      </div>
      
    </div>
  )
}

export default Home