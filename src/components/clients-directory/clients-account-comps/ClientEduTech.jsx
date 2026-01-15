import "./clientEdutech.css";
import Imgs from "./test.png";
import ClientsCBTExamsLogin from "../../../computer_base_assessment_components/computer_base_examination/student_components/ClientsCBTExamsLogin.jsx";
import { Link, useNavigate } from "react-router-dom";
export default function ClientEduTech({ data }) {
  function ExamsOptCard(props) {
    const navigate = useNavigate();
    return (
      <div
        onClick={() => {
          navigate(
            `/online_examination_system/${data?._id}/${
              props.value.toLowerCase().split("-")[0]
            }`
          );
        }}
        className="exmTypeCont clientDashboardCard clnEdTechLeft fx-ac"
      >
        <div className="extypeCard fx-cl space1">
          <h3>{props.name}</h3>
          <p>{props.discription}</p>
          <button>Start Now</button>
        </div>
        <div className="fx-cl spacem fx-ae">
          <span className="tag">Live</span>
          <div>
            <img src={props._img} alt="here" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="sectionclnEdTech fx-cl space3">
      <div className="clnEdTechCont">
        <div className="fx-cl space2">
          <div className="clnEdTechBanner clientDashboardCard  clnEdTechLeft">
            <div className="fx-cl space2">
              <h3>Confidence that builds future.</h3>
              <p>Empowering kids with confidence</p>
              <button>Book Now</button>
            </div>
            <div>
              <img src={Imgs} alt="here" />
            </div>
          </div>
          <div className="fx-cl spacem">
            <h4>Educational Examination System</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint.
            </p>
          </div>

          <div className="g g2 rwdG2 space1">
            <ExamsOptCard
              value="neco"
              name="NECO-CBT"
              discription="Ready to start your Neco"
              _img={Imgs}
            />
            <ExamsOptCard
              value="waec"
              name="WAEC-CBT"
              discription="Ready to start your WAEC"
              _img={Imgs}
            />
            <ExamsOptCard
              value="nabteb"
              name="NABTEB-CBT"
              discription="Ready to start your NABTEB"
              _img={Imgs}
            />
            <ExamsOptCard
              value="jamb"
              name="JAMB-UTME"
              discription="Ready to start your UTME"
              _img={Imgs}
            />
          </div>
        </div>
        <div className="clnEdTechRight clientDashboardCard">
          <div className="fx-cl space2">
            <h3>Helping kids to shoot thier dreams.</h3>
            <p>
              Inspiring kids to aim <strong>achieve</strong>
            </p>
            <button>Learn More!</button>
          </div>
          <div>{/* <img src={N1} alt="here" /> */}</div>
        </div>
      </div>

      <div className="edTechAside fx-cl space2">
        <div className="fx-cl spacem">
          <h4>Government Services Entrance e-Exams</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sit
            quia.
          </p>
        </div>
        <div className="cardContz fx-ac space2">
          <ExamsOptCard
            name="NECO-CBT"
            discription="Ready to start your Neco"
            _img={Imgs}
          />
          <ExamsOptCard
            name="NECO-CBT"
            discription="Ready to start your Neco"
            _img={Imgs}
          />
          <ExamsOptCard
            name="NECO-CBT"
            discription="Ready to start your Neco"
            _img={Imgs}
          />
          <ExamsOptCard
            name="NECO-CBT"
            discription="Ready to start your Neco"
            _img={Imgs}
          />
        </div>
      </div>
    </section>
  );
}
