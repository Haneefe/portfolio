import React,{useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContactForm from "../components/ContactForm";
import { motion as m } from "framer-motion";
import PageTransition from "../components/PageTransition";
const Contact = () => {
  return (
    // <m.div
    // initial={{width:0}}
    // animate={{width:"100%"}}
    // exit={{x:window.innerWidth,transition:{duration:0.1}}}
    // >
     <PageTransition>
      <NavBar />
      {/* <Modal/> */}
      <HeroImg2 heading="CONTACT." text="Lets get connected" />
      <ContactForm />
      <Footer />
      </PageTransition>
    // </m.div>
  );
};

export default Contact;
