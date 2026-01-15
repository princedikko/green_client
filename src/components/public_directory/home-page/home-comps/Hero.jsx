import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import CountUp from "react-countup"; // Importing CountUp for counting numbers
import { Typewriter } from "react-simple-typewriter"; // Importing Typewriter for text animation
import { Link } from "react-router-dom"; // Importing Link for navigation
import "./Hero.css"; // Importing CSS for styling
import HeroSwiper from "./hero_folder/HeroSwiper";
import ManSitting from "./homepage_images/mansitting.png"; // Importing image for the hero section
import GalSitting from "./homepage_images/girlsitting.png"; // Importing another image for the hero section
import StuGalSitting from "./homepage_images/Udupss_girl.png"; // Importing another image for the hero section

// importing icons from material user interface

import IsoIcon from "@mui/icons-material/Iso";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(1);

  return (
    <section className="hero-section g g2">
      <motion.div
        className="hero-text fx-cl space1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to UDUPSS
        </motion.p>

        <h1 className="main-heading">
          <Typewriter
            words={[
              "Usmanu Danfodiyo University Primary School Sokoto",
              "Where Every Child is Seen, Heard, and Valued",
              "Building Future Leaders from the Ground Up",
              "Strong Foundation, The Endless Possibilities",
              "Usmanu Danfodiyo University Primary School Sokoto",
              "Empowering Young Minds for a Brighter Tomorrow",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={10}
            delaySpeed={5000}
          />
        </h1>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          A leading institution committed to nurturing young learners through
          quality education, moral values, and a safe learning environment.
        </motion.p>

        <motion.div
          className="fx-ac space1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button className="shop-btn fx-ac spacem">
            <IsoIcon />
            <span>Join us!</span>
          </button>
          <button className="shop-btn fx-ac spacem">
            <CloudUploadIcon />
            <span>Explore Programmes</span>
          </button>
        </motion.div>

        <div className="heroBaseStatus fx-ac   space4">
          <motion.figure
            className="fx-cl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          >
            <h4>
              <CountUp end={354} duration={4} />+
            </h4>
            <span>Completed</span>
            <span>graduate</span>
          </motion.figure>

          <motion.figure
            className="fx-cl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
          >
            <h4>
              <CountUp end={20994} duration={5} />
            </h4>
            <span>Graduated</span>
            <span>since 1989</span>
          </motion.figure>

          <motion.figure
            className="fx-cl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.7,
            }}
          >
            <h4>
              <CountUp end={89} suffix="%" duration={4} />
            </h4>
            <span>Completed</span>
            <span>clients</span>
          </motion.figure>
        </div>
      </motion.div>
      <div className="heroSlideShows">
        <HeroSwiper />
      </div>

      {/* <HeroCompFirst
        currentHero={currentHero}
        setCurrentHero={setCurrentHero}
      /> */}
    </section>
  );
};

export default Hero;
