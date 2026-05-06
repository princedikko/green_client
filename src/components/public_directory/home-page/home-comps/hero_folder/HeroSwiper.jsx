// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // Importing framer-motion for animations

import FirstGen from "../homepage_images/first.png"; // Importing image for the hero section
import LongRcBasket from "../homepage_images/long_reciept_basket.png"; // Importing another image for the hero section
import CoshionImg from "../homepage_images/coshion.png"; // Importing another image for the hero section
import PhoneReciept from "../homepage_images/phoneReciepts.png"; // Importing another image for the hero section
import sa from "../homepage_images/sa.png"; // Importing another image for the hero section
import sas from "../homepage_images/sas.png"; // Importing another image for the hero section
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
          <img src={PhoneReciept} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={sas} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={sa} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={LongRcBasket} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={FirstGen} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src={CoshionImg} alt="Hero illustration" />
        </figure>
      </SwiperSlide>
    </Swiper>
  );
}
