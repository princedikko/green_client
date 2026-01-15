import React from "react";
import "./carousel.css";
import Images from "../../../public_directory/homepage/home_pictures/mn.png";
import Images2 from "../../../public_directory/homepage/home_pictures/cdf.png";
import Images3 from "../../../public_directory/homepage/home_pictures/cff.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Logo from "../../homepage/home_pictures/logos/Manga_Cons _Logo3.png";

function CarouselContents(props) {
  return (
    <div
      className={`home-carousel-container`}
      style={{ background: `linear-gradient(${props.bg})` }}
    >
      <div
        className={`home-carousel-leftDiv ${props.class}`}
        style={props.overFlowStuff}
      >
        <img
          src={props.image}
          alt="City Image"
          className="home-carousel-image"
          style={props.imgStyle}
        />
      </div>
      <div className="home-carousel-rightDiv" style={props.contStyle}>
        <h1 className="home-carousel-heading" style={props.subhStyle0}>
          {props.heading}{" "}
        </h1>
        <span style={props.subhStyle}>{props.subheading}</span>
        <p className="home-carousel-paragraph" style={props.subhStyle2}>
          {props.discription}
        </p>
        <button className="home-carousel-button" style={props.subhStyle3}>
          {props.btn}
        </button>
      </div>
    </div>
  );
}

function HeroSections() {
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselContents
            overFlowStuff={{ overflow: "hidden" }}
            bg="180deg, #13544e, #427671"
            imgStyle={{
              borderRadius: "1.2rem",
              // transform:"scale(1.5)"
            }}
            subhStyle={{
              fontSize: "3.4rem",
              fontWeight: "600",
              color: "#91e6b3",
            }}
            image={Images}
            heading="Our Programs"
            subheading="Nursing programms"
            discription="Prepare for a rewarding career in nursing with our comprehensive programs, offering both theoretical and practical training."
            btn="Explore"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselContents
            // class="crsbg"
            bg="180deg, #f3f3f3, #f3f3f3"
            imgStyle={{
              borderRadius: "1.2rem",
              width: "33rem",
              // transform:"scale(1.5)"
            }}
            subhStyle0={{ color: "#2f63b2" }}
            subhStyle={{ fontSize: "3.4rem", fontWeight: "600", color: "#333" }}
            image={Logo}
            subhStyle2={{ color: "#333" }}
            subhStyle3={{ color: "#fff", backgroundColor: "#2f63b2" }}
            heading="Our Programs"
            subheading="Science programms"
            discription="Explore a variety of scientific disciplines and engage in research that drives innovation and discovery."
            btn="Explore"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselContents
            // bg="180deg, #4ee60c, #4ee60c"
            imgStyle={{
              borderRadius: "1.2rem",
              transform: "scale(1.35)",
              width: "33rem",
            }}
            subhStyle={{
              fontSize: "3.4rem",
              fontWeight: "600",
              color: "#2f63b2",
            }}
            subhStyle2={{ fontWeight: "500" }}
            subhStyle3={{ color: "#2f63b2", backgroundColor: "#fff" }}
            contStyle={{ textAlign: "center", alignItems: "center" }}
            image={Images3}
            heading="Apply Today"
            subheading="Start your journey with Us!"
            discription="Take the first step towards a successful future. Apply now and join a community dedicated to excellence in science and nursing."
            btn="Apply now"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
const Carousel = () => {
  return (
    <section className="section-carousel rwdHide">
      <HeroSections />
    </section>
  );
};

export default Carousel;
