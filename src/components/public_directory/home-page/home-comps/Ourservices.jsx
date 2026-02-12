import "./ourservices.css";
import SchoolIcon from "@mui/icons-material/School";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApprovalIcon from "@mui/icons-material/Approval";
import InfoIcon from "@mui/icons-material/Info";

export default function Ourservices() {
  const ourservicesContents = [
    {
      icon: <HandshakeIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents in this platished in oniomotion she",
    },
    {
      icon: <HandshakeIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents in this platished in oniomotion she",
    },
    {
      icon: <LibraryBooksIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents ow e one established in oniomotion she",
    },
    {
      icon: <ApprovalIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents iablished in oniomotion she",
    },
    {
      icon: <InfoIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents iablished in oniomotion she",
    },
    {
      icon: <SchoolIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents iablished in oniomotion she",
    },
    {
      icon: <SchoolIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents iablished in oniomotion she",
    },
    {
      icon: <SchoolIcon style={{ fontSize: "2.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph: "i'm the sutdents iablished in oniomotion she",
    },
  ];
  return (
    <section className="sectionOurServices">
      <div className="our_serivces_cont fx-cl space1">
        <div className="fx-ac fx-jc">
          <h2>
            All <span style={{ color: "#51AC63" }}>Services</span> - we can do
          </h2>
        </div>
        <div className="OurSCardCont g g4 ">
          {ourservicesContents?.map((response, index) => {
            return (
              <figure key={index} className="ourSCard fx-cl space2">
                <span>{"[0" + index + 1 + "]"}</span>
                <span className="ourSIcon fx-ac fx-jc">{response?.icon}</span>
                <div className="fx-ac spacem">
                  <span className="fx-cl">
                    <h4>{response.heading}</h4>
                    <span>{response?.subHeading}</span>
                  </span>
                </div>
                <p>{response?.paragraph}</p>
              </figure>
            );
          })}
        </div>
        <div className="ourSBtn fx-ac fx-jc spacem">
          <button>View more</button>
          <button>
            <span>View all</span> <span className="tabors">g</span>
          </button>
        </div>
      </div>
    </section>
  );
}
