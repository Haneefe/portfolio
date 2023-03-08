import React from 'react'
import { useTransform,useViewportScroll,motion } from 'framer-motion';
const ScrollingAnimationContainer = ({children}) => {
const { scrollYProgress} = useViewportScroll()
const scale = useTransform(scrollYProgress, [0,0.5],[0.8,1]);
  return (
    <motion.div
    style={{ scale }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress
      }}
      transition={{duration:0.5}}
    />
    {children}
  </motion.div>
  )
}

export default ScrollingAnimationContainer