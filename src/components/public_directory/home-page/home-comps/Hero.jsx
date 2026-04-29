import { motion } from "framer-motion"; // Importing framer-motion for animations
import CountUp from "react-countup"; // Importing CountUp for counting numbers
import { Typewriter } from "react-simple-typewriter"; // Importing Typewriter for text animation
import "./Hero.css"; // Importing CSS for styling
import HeroSwiper from "./hero_folder/HeroSwiper";
import Imag1 from "./homepage_images/test/adsf1.png";

import Logo from "../logo/greenlg.png"; // Importing logo image
// importing icons from material user interface

import IsoIcon from "@mui/icons-material/Iso";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Hero = () => {
  return (
    <div className="heroWrap">
      <section className="hero-section fx-cl fx-jc fx-ac space2">
        <div className="fx-jc">
          <motion.div
            className="hero-text fx-cl fx-ac space2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="heroTop fx-cl fx-ac space2">
              <motion.p
                className="subheading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <strong>Green!</strong> Inventory Management.
              </motion.p>

              <h1 className="main-heading">
                <Typewriter
                  words={[
                    "The Green! Inventory Management Software",
                    "Manage Your Inventory & Sales Effortlessly",
                    "Where Everybody is Seen, Heard, and Valued",
                    "Building Future Businesses from the Ground Up",
                    "Meet Your Next Generation Inventory Software",
                    "Strong Foundation, The Endless Possibilities",
                    "Empowering Businesses for a Brighter Tomorrow",
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
                {" "}
                We’re a leading business management platform, empowering
                businesses to grow through reliable software, integrity, and a
                safe, supportive environment.
                {/* Green is the all-in-one POS and inventory system designed to help your
          business track stock, streamline sales, and grow faster.” */}
              </motion.p>
            </div>
            <motion.div
              className="fx-cl fx-ac space2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="fx-ac space1">
                <button className="shop-btn fx-ac spacem">
                  <IsoIcon />
                  <span>Get started</span>
                </button>
                <button className="shop-btn fx-ac spacem">
                  <CloudUploadIcon />
                  <span>Learn more!</span>
                </button>
              </div>
            </motion.div>
            <div className="heroImage">
              <HeroSwiper />
            </div>
          </motion.div>
        </div>
        <figure className="heroBaseBar fx-ac spacem">
          {" "}
          <img src={Imag1} alt="HomeComp3 image" />{" "}
          <div className="fx-cl spacem">
            <p className="heroBaseDesc fx-ac spacem">
              We provide{" "}
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
                  <CountUp end={365} duration={4} />+
                </h4>
                {/* <span>graduate</span> */}
              </motion.figure>{" "}
              days of uninterrupted availability, trusted by thousands of users,
              with{" "}
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
                  <CountUp end={99} suffix="%" duration={4} />
                </h4>
                {/* <span>clients</span> */}
              </motion.figure>{" "}
              fast processing speed for efficient and reliable performance.
            </p>{" "}
          </div>{" "}
        </figure>
      </section>
    </div>
  );
};
// const Hero = () => {
//   return (
//     <div className="heroWrap">
//       <section className="hero-section ">
//         <div className="hero-section-cont">
//           <motion.div
//             className="hero-text fx-cl space1"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <motion.p
//               className="subheading"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <strong>Green!</strong> Inventory Management.
//             </motion.p>

//             <h1 className="main-heading">
//               <Typewriter
//                 words={[
//                   "Manage Your Inventory & Sales Effortlessly",
//                   "Where Everybody is Seen, Heard, and Valued",
//                   "Building Future Businesses from the Ground Up",
//                   "Strong Foundation, The Endless Possibilities",
//                   "The Green! Inventory Management Software",
//                   "Empowering Businesses for a Brighter Tomorrow",
//                 ]}
//                 loop={Infinity}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={30}
//                 deleteSpeed={10}
//                 delaySpeed={5000}
//               />
//             </h1>

//             <motion.p
//               className="description"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//             >
//               {" "}
//               We’re a leading business management platform, empowering
//               businesses to grow through reliable software, integrity, and a
//               safe, supportive environment.
//               {/* Green is the all-in-one POS and inventory system designed to help your
//           business track stock, streamline sales, and grow faster.” */}
//             </motion.p>

//             <motion.div
//               className="fx-ac space1"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//             >
//               <button className="shop-btn fx-ac spacem">
//                 <IsoIcon />
//                 <span>Sign Up!</span>
//               </button>
//               <button className="shop-btn fx-ac spacem">
//                 <CloudUploadIcon />
//                 <span>Explore Our Services</span>
//               </button>
//             </motion.div>

//             <div className="heroBaseStatus fx-ac   space4">
//               <motion.figure
//                 className="fx-cl"
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 10,
//                   delay: 0.3,
//                 }}
//               >
//                 <h4>
//                   <CountUp end={354} duration={4} />+
//                 </h4>
//                 <span>Completed</span>
//                 <span>graduate</span>
//               </motion.figure>

//               <motion.figure
//                 className="fx-cl"
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 10,
//                   delay: 0.5,
//                 }}
//               >
//                 <h4>
//                   <CountUp end={20994} duration={5} />
//                 </h4>
//                 <span>Graduated</span>
//                 <span>since 1989</span>
//               </motion.figure>

//               <motion.figure
//                 className="fx-cl"
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 10,
//                   delay: 0.7,
//                 }}
//               >
//                 <h4>
//                   <CountUp end={89} suffix="%" duration={4} />
//                 </h4>
//                 <span>Completed</span>
//                 <span>clients</span>
//               </motion.figure>
//             </div>
//           </motion.div>
//           <div className="heroSlideShows">
//             <HeroSwiper />
//           </div>

//           {/* <HeroCompFirst
//         currentHero={currentHero}
//         setCurrentHero={setCurrentHero}
//       /> */}
//         </div>
//       </section>
//     </div>
//   );
// };

export default Hero;
