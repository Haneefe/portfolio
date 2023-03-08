import React from "react";
import NavBar from "../components/NavBar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import { motion as m } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ScrollingAnimationContainer from "../components/ScrollingAnimationContainer";
const Home = () => {
  //
  return (
    // <m.div
    // initial={{width:0}}
    // animate={{width:"100%"}}
    // exit={{x:window.innerWidth,transition:{duration:0.1}}}
    // >
    <PageTransition>
      <NavBar />
     
      <Heroimg />
      < ScrollingAnimationContainer>
    
      <Work />

      </ScrollingAnimationContainer>
      <Footer />
      </PageTransition>
    // </m.div>
  );
};

export default Home;
