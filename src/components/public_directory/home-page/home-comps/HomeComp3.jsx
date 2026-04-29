import "./homecomp3.css";

import Imag1 from "./homepage_images/test/adsf1.png";
import Imag2 from "./homepage_images/test/adsf2.png";
import Imag3 from "./homepage_images/test/adsf3.png";
const services = [
  {
    id: 1,
    title: "Real time operation",
    tag: "Standard",
    desc: "Our receipt management app is designed to work in real time.",
    img: Imag1,
  },
  {
    id: 2,
    title: "Cloud backup",
    tag: "Premium",
    desc: "All your data is securely stored in the cloud.",
    img: Imag1,
  },
  {
    id: 3,
    title: "Multi-user access",
    tag: "Standard",
    desc: "Allow multiple users to manage records together.",
    img: Imag1,
  },
  {
    id: 4,
    title: "Analytics dashboard",
    tag: "Advanced",
    desc: "Get insights and reports from your transactions.",
    img: Imag1,
  },
  {
    id: 5,
    title: "Offline mode",
    tag: "Standard",
    desc: "Continue working even without internet connection.",
    img: Imag1,
  },
  {
    id: 6,
    title: "Secure payments",
    tag: "Premium",
    desc: "Integrated secure payment solutions.",
    img: Imag1,
  },
  {
    id: 7,
    title: "Automated invoicing",
    tag: "Advanced",
    desc: "Generate and send invoices automatically to your clients.",
    img: Imag1,
  },
  {
    id: 8,
    title: "Expense tracking",
    tag: "Standard",
    desc: "Easily monitor and categorize your daily business expenses.",
    img: Imag1,
  },
];

export default function HomeComp3() {
  return (
    <section className="sectionHomeComp3 fx-cl space6">
      <div className="srvcHead fx-ac fx-jc space2">
        <figure>&nbsp;</figure>
        <p>Discover the range of services we offer to meet your needs.?</p>
        <figure>&nbsp;</figure>
      </div>
      <div className="ourSrvc g g4 space2">
        {services.map((service) => (
          <figure key={service.id} className="fx-ac spacem">
            <img src={service.img} alt={service.title} />
            <div className="fx-cl spacem">
              <div className="fx-ac space2">
                <h3>{service.title}</h3>
                <span className="srvcTag">{service.tag}</span>
              </div>
              <p>
                {service.desc.length > 30
                  ? service.desc.slice(0, 30) + "..."
                  : service.desc}
              </p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
