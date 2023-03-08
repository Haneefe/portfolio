import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

import ScrollingAnimationContainer from "../components/ScrollingAnimationContainer";
const Project = (props) => {
  //
  return (
    // <motion.div
    // initial={{width:0}}
    // animate={{width:"100%"}}
    // exit={{x:window.innerWidth,transition:{duration:0.1}}}
    // >
    <PageTransition>
      <NavBar />
      {/* <ScrollingAnimationContainer> */}
      <HeroImg2  />
      
      <Work />
      {/* </ScrollingAnimationContainer> */}
      {/* <PricingCard /> */}
      <Footer />
      </PageTransition>
    // </motion.div>
  );
};

export default Project;
