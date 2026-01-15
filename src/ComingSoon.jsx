import  "./comingsoon.css";
import { Link } from "react-router-dom";

export default function ComingSoon(){
  return(
    <div className="fx-ac fx-jc comingsoon" style={{height: "100vh"}}> 
    <div className="fx-cl space1 fx-ac" style={{backgroundColor: "#"}}>
    <h2 style={{fontSize: "2.8rem"}}>Coming Soon</h2>
    <p>We are currently working hard on creating something good for you. <br />
      well be be here soon.
    </p>
    <Link to="/" style={{borderRadius: ".5rem", padding: ".6rem 1.2rem", backgroundColor: "#2d5ecf", color: "#fff", textAlign: "center", width:"50%",}}>Back to Home</Link>
    </div>
   </div>
  )
}