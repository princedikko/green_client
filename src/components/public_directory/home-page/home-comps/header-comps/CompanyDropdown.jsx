import { useNavigate } from "react-router-dom";
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
    <section
      className="sectionCompanyDropdown fx-cl fx-ac space6"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="fx-cl pd3 space6" style={{ maxWidth: "130rem" }}>
        {companyDropdownData.map((group, index) => (
          <div key={index} className={`fx-cl space4 ${group.class || ""}`}>
            {/* Section Header */}
            <div className="fx-cl spacem">
              <span className="fs6 fw600">{group.section}</span>

              {group.description && <p className="fs4">{group.description}</p>}
            </div>

            {/* Items Grid */}
            <div className="g g3 space2">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="solutionsDropdwnCard fx-as space2 cp"
                  onClick={() => redirect(item.link)}
                >
                  {/* Icon */}
                  <div className="fx-ac fx-jc">
                    <span className="fs7">{item.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="fx-cl spacem">
                    <h4 className="fs5 fw500">{item.title}</h4>

                    {item.desc && <p className="fs4">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
