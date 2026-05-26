import React, { useState } from "react";
import BarcodeScanner from "./Test2";
import SvgInteractiveMap from "../components/public_directory/SvgInteractiveMap";
import { WorldSvgInteractiveMap } from "../components/public_directory/SvgInteractiveMap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Test() {
  const [barcode, setBarcode] = useState("");

  return (
    <div>
      <Navbar />
      <SvgInteractiveMap />
      <WorldSvgInteractiveMap />
    </div>
  );
}

function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      title: "Products",
      links: ["Inventory", "Payments", "Hosting", "Analytics"],
    },
    {
      title: "Solutions",
      links: ["E-Commerce", "Schools", "Business", "Enterprise"],
    },
    {
      title: "Resources",
      links: ["Docs", "API", "Tutorials", "Community"],
    },
  ];

  return (
    <nav style={styles.nav}>
      {/* TOP BAR */}
      <div style={styles.container}>
        <div style={styles.logo}>DikkoTech</div>

        {/* DESKTOP */}
        <div style={styles.desktopMenu}>
          {navItems.map((item, i) => (
            <div
              key={i}
              style={styles.navItem}
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button style={styles.navButton}>
                {item.title}
                <ExpandMoreIcon fontSize="small" />
              </button>

              {/* FULL WIDTH DROPDOWN */}
              {openIndex === i && (
                <div style={styles.dropdown}>
                  <div style={styles.dropdownInner}>
                    <div style={styles.leftBox}>
                      <h2 style={{ fontSize: 24, marginBottom: 10 }}>
                        {item.title}
                      </h2>
                      <p style={{ color: "#666" }}>
                        Explore tools and solutions built for modern systems.
                      </p>
                    </div>

                    <div style={styles.rightBox}>
                      {item.links.map((link, idx) => (
                        <div key={idx} style={styles.card}>
                          <h4 style={{ marginBottom: 6 }}>{link}</h4>
                          <p style={{ fontSize: 13, color: "#777" }}>
                            Learn more about {link.toLowerCase()}.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <button style={styles.cta}>Get Started</button>
        </div>

        {/* MOBILE BUTTON */}
        <div style={styles.mobileIcon}>
          {mobileOpen ? (
            <CloseIcon onClick={() => setMobileOpen(false)} />
          ) : (
            <MenuIcon onClick={() => setMobileOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map((item, i) => (
            <div key={i}>
              <div
                style={styles.mobileItem}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.title}
                <ExpandMoreIcon />
              </div>

              {openIndex === i && (
                <div style={styles.mobileLinks}>
                  {item.links.map((link, idx) => (
                    <div key={idx} style={styles.mobileLink}>
                      {link}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button style={styles.mobileCTA}>Get Started</button>
        </div>
      )}
    </nav>
  );
}

/* ================= STYLES ================= */
const styles = {
  nav: {
    width: "100%",
    borderBottom: "1px solid #ddd",
    position: "relative",
    background: "#fff",
    zIndex: 1000,
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  desktopMenu: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },

  navItem: {
    position: "relative",
  },

  navButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "15px",
  },

  dropdown: {
    position: "fixed",
    top: "70px",
    left: 0,
    width: "100vw",
    background: "#fff",
    borderTop: "1px solid #eee",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  dropdownInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    padding: "40px 20px",
    gap: "30px",
  },

  leftBox: {},

  rightBox: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },

  card: {
    padding: "15px",
    borderRadius: "12px",
    background: "#f7f7f7",
    cursor: "pointer",
  },

  cta: {
    background: "#000",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  mobileIcon: {
    display: "none",
  },

  mobileMenu: {
    padding: "15px 20px",
    borderTop: "1px solid #eee",
  },

  mobileItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    cursor: "pointer",
  },

  mobileLinks: {
    paddingLeft: "10px",
    paddingBottom: "10px",
  },

  mobileLink: {
    padding: "6px 0",
    color: "#555",
  },

  mobileCTA: {
    width: "100%",
    marginTop: "15px",
    background: "#000",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
  },
};
export default Test;
