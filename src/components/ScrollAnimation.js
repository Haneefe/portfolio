import React from 'react'
import { motion,useScroll} from 'framer-motion'
const ScrollAnimation = () => {
   const {scrollYProgress}=useScroll()
  return (
    <motion.div style={{
        scaleX:scrollYProgress,
        position:"fixed",
        top:0,
        right:0,
        left:0,
        height:5,
        transformOrigin:"0%",
        background:"#f3ba2f",
        zIndex:20
    
    }} ></motion.div>
  )
}

export default ScrollAnimation