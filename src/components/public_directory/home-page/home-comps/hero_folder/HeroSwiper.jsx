// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // Importing framer-motion for animations

import ManSitting from "../homepage_images/mansitting.png"; // Importing image for the hero section
import GalSitting from "../homepage_images/girlsitting.png"; // Importing another image for the hero section
import StuGalSitting from "../homepage_images/Udupss_girl.png"; // Importing another image for the hero section
import HoldingLogo from "../homepage_images/joolie.png"; // Importing another image for the hero section
import Logo3d from "../homepage_images/logo_3d.png"; // Importing another image for the hero section
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"; // ✅ Important for fade to work

export default function HeroSwiper() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1500} // 👈 ADDED: controls how long the fade lasts
    >
      <SwiperSlide>
        <figure>
          <img src={HoldingLogo} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={Logo3d} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={GalSitting} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={ManSitting} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={StuGalSitting} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
    </Swiper>
  );
}
