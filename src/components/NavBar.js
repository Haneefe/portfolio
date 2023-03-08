import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion as m} from "framer-motion";
import GlobalSpinner from "./GlobalSpinner";
// function disableScroll() {
//   document.body.classList.add("stop-scrolling");
// }

// function enableScroll() {
//   document.body.classList.remove("stop-scrolling");
// }
function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}
const NavBar = () => {
  const [loading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true);
    disableScroll()
      setTimeout(() => {
        setIsLoading(false);
      enableScroll()
      }, 2000);
    },[])
    
  const [hamCLick, setHamClick] = useState(false);
  const [color, setColor] = useState(false);
  const openMenu=()=>{
setHamClick(true)
disableScroll()
// if (typeof window != 'undefined' && window.document) {
//   document.body.style.overflow = 'hidden';
// }
  }
  const closeMenu=()=>{
setHamClick(false)
// document.body.style.overflow = 'unset'
enableScroll()
  }

  

  const scroll=()=>{
    window.scrollTo(0,0);
    
   }
  const changeColor = () => {
    //
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      {loading ? <GlobalSpinner/>:<>
      <Link to="/" onClick={scroll}>
        <h1>Portfolio</h1>
      </Link>

      <m.ul className={!hamCLick ? "navMenu" : "navMenu active"}>
        {/* <ul activeClassName={styles["navMenu"]}> */}
        <li>
          <Link to="/" onClick={scroll}>
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={scroll}>
            <h1>Project</h1>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={scroll}>
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={scroll}>
            <h1>Contact</h1>
          </Link>
        </li>
        
      </m.ul>
      <div className="hamburger" >
        {/* onClick={handleHamCLick} */}
        {hamCLick ? (
          <FaTimes size={20} style={{ color: "#fff" }} onClick={closeMenu} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} onClick={openMenu} />
        )}
        {/* <FaTimes onClick={handleHamCLick} size={20} style={{ color: "#fff" }} /> */}
        {/* <FaBars onClick={handleHamCLick} size={20} style={{ color: "#fff" }} /> */}
      </div>
      </>}
     
    </div>
  );
};

export default NavBar;




