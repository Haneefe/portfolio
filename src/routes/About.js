import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import { motion as m} from "framer-motion";
import PageTransition from "../components/PageTransition";
const About = () => {
  //
  return (
    // <m.div
    // initial={{width:0}}
    // animate={{width:"100%"}}
    // exit={{x:window.innerWidth,transition:{duration:0.1}}}
    // >
    <PageTransition>
      <NavBar />
      <HeroImg2  />
      <AboutContent />
      <Footer />
      </PageTransition>
    // </m.div>
  );
};

export default About;
