import "./future.css";

// MUI ICONS IMPORTS
import SchoolIcon from "@mui/icons-material/School";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApprovalIcon from "@mui/icons-material/Approval";
import InfoIcon from "@mui/icons-material/Info";

export default function Future() {
  const futureContents = [
    {
      icon: <SchoolIcon style={{ fontSize: "3.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph:
        "i'm the sutdents in this platformof some countires email and they are excellent complate work shop. now e one established in oniomotion she",
    },
    {
      icon: <SchoolIcon style={{ fontSize: "3.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph:
        "i'm the sutdents in this platformof some countires email and they are excellent complate work shop. now e one established in oniomotion she",
    },
    {
      icon: <SchoolIcon style={{ fontSize: "3.4rem" }} />,
      heading: "Absolutely Great",
      subHeading: "Confedent of the futusff",
      paragraph:
        "i'm the sutdents in this platformof some countires email and they are excellent complate work shop. now e one established in oniomotion she",
    },
  ];
  return (
    <section className="sectionFuture">
      <div className="futureContainer fx-cl space3">
        <div className="futureCardsContainer fx-cl space1">
          <div className="futureTopCards fx-ac space2">
            {futureContents?.map((response, index) => {
              return (
                <figure key={index} className="futureCard fx-cl space2">
                  <div className="fx-ac spacem">
                    <span className="futureIcon">{response?.icon}</span>
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
          <div className="futureBaseCards fx-ac space2">
            {futureContents?.map((response, index) => {
              return (
                <figure key={index} className="futureCard fx-cl space2">
                  <div className="fx-ac spacem">
                    <span className="futureIcon">{response?.icon}</span>
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
        </div>
      </div>
    </section>
  );
}
