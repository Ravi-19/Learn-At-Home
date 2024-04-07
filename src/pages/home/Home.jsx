import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Journey from "../../components/journey/Journey"
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
      <Journey/>
      <Footer/>
    </div>
  )
}

export default Home