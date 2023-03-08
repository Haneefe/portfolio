import React,{useState,useEffect} from "react";
import { Route, Routes,useLocation} from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import { AnimatePresence } from "framer-motion";
import ScrollAnimation from "./components/ScrollAnimation";
import { HashLoader } from "react-spinners";
const App = () => {
  const [loading,setIsLoading]=useState(false)
  useEffect(()=>{
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[])
  return (
    <>
    {loading ?<HashLoader
        color={"#f3ba2f"}
        loading={loading}
        // cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{justifyContent:"center"}}
      />:
    <>
    <ScrollAnimation/>
   
   <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
}
   </>
  
   
  );
};

export default App;
