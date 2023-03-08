import React,{useState} from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'
import { motion,AnimatePresence } from 'framer-motion'

const dropIn={
  hidden:{
  y:"-100vh",
  opacity:0
  },
  visible:{
    y:"0",
    opacity:1,
    trasnsition:{
      duration:0.1,
      type:"spring",
      damping:25,
      stiffness:500
    }
  },
  // exit:{
  //   y:"100vh",
  //   opacity:0
  // }
}
const Modal = ({setCloseModal}) => {
 
    const closeHandler=()=>{
       setCloseModal(false)
    }
//  if(!open)return null   

  return ReactDOM.createPortal(
    <AnimatePresence initial={true}  wait={true} onExitComplete={()=>null}>
    <motion.div className='modalBackdrop' 
    onClick={closeHandler} 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    key="backdrop"
    >
      
       {setCloseModal && <motion.div className='modalContainer'
       onClick={(e)=>e.stopPropagation()}
        key="modal-modal"
        drag
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        > 
       <div className='headerModal' key={"header-modal"}>
       <button onClick={closeHandler} className="xbtn" key={"button-modal"}>x</button>
       </div>
      <div className='bodyModal' key={"Body-modal"}>
      
      <h1 className='message' key={"message-modal"}>Message sent</h1>
      </div>
       
         
         </motion.div>}
          
    </motion.div>
    </AnimatePresence>  ,
    
    document.querySelector('#modal-root')
  )
}

export default Modal