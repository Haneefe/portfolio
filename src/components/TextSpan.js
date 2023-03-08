import React from 'react'
import { color, motion } from 'framer-motion'
import "./TextSpan.css"
const TextSpan = ({children}) => {
    const animateLetters=()=>{
        return {
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(0.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(0.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
        }
    }
  return (
    <motion.span whileHover={()=>animateLetters()}>{children}</motion.span>
  )
}

export default TextSpan