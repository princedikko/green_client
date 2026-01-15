import { Link } from "react-router-dom";
import "./libraryBooks.css"; // Import a CSS file for styling

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GetAppIcon from "@mui/icons-material/GetApp"; // Download icon
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function library_booksBooks() {
  const cardData = [
    {
      id: 1,
      title: "Anatomy & Physiology",
      subtitle: "Human Body Structure",
      status: "Active",
    },
    {
      id: 2,
      title: "Microbiology for Nurses",
      subtitle: "Disease & Immunity",
      status: "Active",
    },
    {
      id: 3,
      title: "Nursing Procedures",
      subtitle: "Clinical Guidelines",
      status: "Inactive",
    },
    {
      id: 4,
      title: "Pharmacology Basics",
      subtitle: "Drugs & Treatments",
      status: "Active",
    },
    {
      id: 5,
      title: "Pathophysiology",
      subtitle: "Disease Mechanisms",
      status: "Active",
    },
    {
      id: 6,
      title: "Medical-Surgical Nursing",
      subtitle: "Adult Health",
      status: "Active",
    },
    {
      id: 7,
      title: "Pediatric Nursing",
      subtitle: "Child Care",
      status: "Active",
    },
    {
      id: 8,
      title: "Mental Health Nursing",
      subtitle: "Psychiatric Care",
      status: "Inactive",
    },
    {
      id: 9,
      title: "Community Health Nursing",
      subtitle: "Public Health",
      status: "Active",
    },
    {
      id: 10,
      title: "Nutrition for Nurses",
      subtitle: "Diet & Wellness",
      status: "Active",
    },
    {
      id: 11,
      title: "Leadership in Nursing",
      subtitle: "Management & Ethics",
      status: "Active",
    },
    {
      id: 12,
      title: "Maternal & Newborn Nursing",
      subtitle: "Pregnancy & Birth",
      status: "Active",
    },
    {
      id: 13,
      title: "Fundamentals of Nursing",
      subtitle: "Basic Skills",
      status: "Active",
    },
    {
      id: 14,
      title: "Medical Terminology",
      subtitle: "Healthcare Vocabulary",
      status: "Inactive",
    },
    {
      id: 15,
      title: "Evidence-Based Practice",
      subtitle: "Research & Application",
      status: "Active",
    },
    {
      id: 16,
      title: "Infection Control",
      subtitle: "Hospital Hygiene",
      status: "Active",
    },
    {
      id: 17,
      title: "Advanced Nursing Practice",
      subtitle: "Specialized Skills",
      status: "Inactive",
    },
    {
      id: 18,
      title: "First Aid for Nurses",
      subtitle: "Emergency Care",
      status: "Active",
    },
    {
      id: 19,
      title: "Nursing Diagnosis",
      subtitle: "Patient Assessment",
      status: "Active",
    },
    {
      id: 20,
      title: "Cardiovascular Nursing",
      subtitle: "Heart Health",
      status: "Active",
    },
    {
      id: 21,
      title: "Orthopedic Nursing",
      subtitle: "Bone & Joint Care",
      status: "Active",
    },
    {
      id: 22,
      title: "Gerontological Nursing",
      subtitle: "Elderly Care",
      status: "Active",
    },
    {
      id: 23,
      title: "Ethics in Nursing",
      subtitle: "Professional Conduct",
      status: "Inactive",
    },
    {
      id: 24,
      title: "Critical Care Nursing",
      subtitle: "ICU Practices",
      status: "Active",
    },
    {
      id: 25,
      title: "Wound Care for Nurses",
      subtitle: "Healing Techniques",
      status: "Active",
    },
    {
      id: 26,
      title: "Pharmacokinetics",
      subtitle: "Drug Interactions",
      status: "Inactive",
    },
    {
      id: 27,
      title: "Neonatal Nursing",
      subtitle: "Newborn Care",
      status: "Active",
    },
    {
      id: 28,
      title: "Respiratory Care",
      subtitle: "Breathing Support",
      status: "Active",
    },
    {
      id: 29,
      title: "Oncology Nursing",
      subtitle: "Cancer Care",
      status: "Active",
    },
    {
      id: 30,
      title: "Psychiatric Disorders",
      subtitle: "Mental Health",
      status: "Active",
    },
    {
      id: 31,
      title: "Renal Nursing",
      subtitle: "Kidney Care",
      status: "Active",
    },
    {
      id: 32,
      title: "Obstetric Nursing",
      subtitle: "Prenatal Care",
      status: "Active",
    },
    {
      id: 33,
      title: "Neurological Nursing",
      subtitle: "Brain & Nerve Health",
      status: "Inactive",
    },
    {
      id: 34,
      title: "Research in Nursing",
      subtitle: "Study Techniques",
      status: "Active",
    },
  ];

  return (
    <div className="library_books-list-container fx-cl">
      <main className="library_bookss-main">
        <div className="library_books-contents fx-cl space3">
          <header
            className="fx-cl"
            style={{ textAlign: "center", fontSize: "3.4rem" }}
          >
            <span
              style={{
                fontweight: "600",
                color: " #4CAF50",
                fontSize: "2.4rem",
              }}
            >
              {" "}
              Through Science and Compassion
            </span>
            <h2>
              Welcome to{" "}
              <span style={{ color: "#2f63b2" }}>library_books Unit</span>
            </h2>
          </header>
          <div className="fx-ac fx-jb space2">
            <div className="libBookTabs fx-ac space3">
              <button>All</button>
              <button>Midwifery</button>
              <button>Nursing</button>
            </div>
            <div className="libBookSearch fx-ac spacem">
              <input type="search" value="" placeholder="search book..." />
              <button>search</button>
            </div>
          </div>
          <div className="grid-container m_cons_library">
            {cardData.map((card) => (
              <div key={card.id} className="card m_cons_library">
                <div className="card-header m_cons_library">
                  <span
                    className={`card-status m_cons_library ${
                      card.status === "Active" ? "active" : "inactive"
                    }`}
                  >
                    {card.status}
                  </span>
                  <div className="fx-ac spacem" style={{ color: "#ddd" }}>
                    <button>
                      <RemoveRedEyeIcon fontSize="large" />
                    </button>
                    <button>
                      <GetAppIcon fontSize="large" />
                    </button>
                  </div>
                </div>
                <div>
                  <AutoStoriesIcon className="card-icon m_cons_library" />
                </div>
                <div className="card-body m_cons_library">
                  <h3 className="card-title m_cons_library">{card.title}</h3>
                  <p className="card-subtitle m_cons_library">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="library_books-aside fx-cl space2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            minus quibusdam nam at sit. Aperiam, enim voluptas praesentium harum
            impedit fugiat molestias sunt nostrum. Corrupti provident suscipit
            nobis perspiciatis soluta explicabo enim sapiente.
          </p>
        </aside>

        <Link className="libBooksBack fx-ac fx-jc" to="/library">
          &larr;
        </Link>
      </main>
    </div>
  );
}
