import { Link, useNavigate } from "react-router-dom";
import "./companyDropdown.css";
import OnlineImage from "../homepage_images/sales.jpg";
import OnlineImage1 from "../homepage_images/sales1.jpg";
import OnlineImage2 from "../homepage_images/sales2.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export default function CompanyDropdown({ setOpenIndex }) {
  const redirect = useNavigate();
  const companyDropdownData = [
    {
      section: "Universe Tech Industry",
      class: "companySection",
      items: [
        {
          title: "About Us",
          desc: "Learn more about our mission, vision, and the problem we are solving.",
          icon: <InfoOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/about",
        },

        {
          title: "Careers",
          desc: "Join our team and help build the future of smart business management.",
          icon: <WorkOutlineOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/careers",
        },

        {
          title: "Affiliates",
          desc: "Partner with us and earn by promoting our inventory platform.",
          icon: <HandshakeOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/affiliates",
        },

        {
          title: "Partners",
          desc: "Explore our technology and business integration partners.",
          icon: <GroupsOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/partners",
        },

        {
          title: "Security",
          desc: "Learn how we protect your data, transactions, and business operations.",
          icon: <SecurityOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/security",
        },

        {
          title: "API & Developers",
          desc: "Integrate your system with our API for advanced business automation.",
          icon: <CodeOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/developers",
        },

        {
          title: "Contact Support",
          desc: "Get help with setup, issues, or account-related questions.",
          icon: <SupportAgentOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/support",
        },

        {
          title: "Blog & Updates",
          desc: "Read product updates, guides, and business insights.",
          icon: <ArticleOutlinedIcon style={{ fontSize: "2.8rem" }} />,
          link: "/company/blog",
        },
      ],
    },
  ];
  return (
    <section className="dropDownContent companyDrpdWrap">
      <div className="companyDrpdFlot">
        <div className="companyDrpdFlotDesc fx-cl space1">
          <h3 className="fs4 fw600">Universe Inventory</h3>
          <p className="fx-cl fs3 lh3">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              mollitia vel repellat iur
            </span>
          </p>
          <Link>
            Know more <span>→</span>
          </Link>
        </div>
        <div className="companyDrpdFlotContents fx-cl">
          {companyDropdownData.map((group, index) => (
            <div key={index} className={` ${group.class || ""}`}>
              {/* Section Header */}
              <div className="fx-cl spacem">
                {group.description && (
                  <p className="fs4">{group.description}</p>
                )}
              </div>

              {/* Items Grid */}
              <div className="g g2">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="companyDropdwnCard fx-as space2 cp"
                    onClick={() => redirect(item.link)}
                  >
                    {/* Content */}
                    <div className="fx-cl spacem">
                      <div className="compDrpCardHead fx-ac spacem">
                        {/* Icon */}
                        <div className="fx-ac fx-jc">
                          <span className="fs7">{item.icon}</span>
                        </div>
                        <h4 className="fs5 fw500">{item.title}</h4>
                      </div>

                      {item.desc && <p className="fs4">{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="companyDrpdFlotCards fx-cl space6">
          <div className="companyDrpdFlotCardsCont fx-cl space2">
            <figure className="fx-ac space1">
              <img src={OnlineImage} alt="" />
              <div className="fx-cl fx-as space1">
                <p className="fs3 fw500 lh2">
                  Why Enterprises should adop Cloud-Base ICT Services
                </p>
                <button>
                  <span>Learn more</span>
                  <span>→</span>
                </button>
              </div>
            </figure>
            <figure className="fx-ac space1">
              <img src={OnlineImage2} alt="" />
              <div className="fx-cl fx-as space1">
                <p className="fs3 fw500 lh2">
                  Using Automation in Business Management saves over 95% more
                  time.
                </p>
                <button>
                  <span>Learn more</span>
                  <span>→</span>
                </button>
              </div>
            </figure>
            <figure className="fx-ac space1">
              <img src={OnlineImage1} alt="" />
              <div className="fx-cl fx-as space1">
                <p className="fs3 fw500 lh2">
                  Using Automation in Business Management saves over 95% more
                  time.
                </p>
                <button>
                  <span>Learn more</span>
                  <span>→</span>
                </button>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
