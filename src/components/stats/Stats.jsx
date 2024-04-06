import './Stats.css'
import { TfiStatsUp } from "react-icons/tfi";
function Stats(props) {
  return (
    <div className='statsCard'>
        <div className="statsLeft">
            <TfiStatsUp />
        </div>
        <div className="statsRight">
            <h3>{props.data}</h3>
            <p>{props.text}</p>
        </div>
    
    </div>
  )
}

export default Stats