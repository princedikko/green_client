import { useState } from "react";
import IsLoading from "../../../isLoading";
// IMPORTING COMPONENTS_______________________
import Header from "./home-comps/Header";
import Hero from "./home-comps/Hero";
import GalleryS from "./home-comps/GalleryS";
import HomeComp3 from "./home-comps/HomeComp3";
import HomeComp4 from "./home-comps/HomeComp4";
import HomeComp5 from "./home-comps/HomeComp5";
import HomeComp6 from "./home-comps/HomeComp6";
import HomeComp7 from "./home-comps/HomeComp7";
import HomeComp8 from "./home-comps/HomeComp8";
import GalleryStaff from "./home-comps/GalleryStaff";
import Future from "./home-comps/Future";
import Footer from "./home-comps/Footer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <section className="sectionHomeCont fx-cl">
      {loading ? <IsLoading></IsLoading> : null}
      <Header />
      <Hero />
      <HomeComp3 />
      <HomeComp4 />
      <HomeComp5 />
      <HomeComp6 />
      <HomeComp8 />
      <HomeComp7 />
      <GalleryS />
      {/* <CTA /> */}
      {/* <HomeCards /> */}
      <GalleryStaff />
      <Future />
      <Footer />
    </section>
  );
}
