import React,{useState,useEffect} from 'react'
import { HashLoader } from "react-spinners";
import ReactDOM from 'react-dom'
import { color } from 'framer-motion';
import { isDisabled } from '@testing-library/user-event/dist/utils';
const GlobalSpinner = () => {
    // const [loading,setIsLoading]=useState(false)
    // useEffect(()=>{
    //   setIsLoading(true);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 4000);
    // },[])
    
  return ReactDOM.createPortal(
    <div style={{height:"100vh",backgroundColor:"#291B4B",zIndex:100,position:'relative'}}><HashLoader
    
    color={"#f3ba2f"}
    // loading={loading}
    // cssOverride={override}
    size={80}
    aria-label="Loading Spinner"
    data-testid="loader"
    style={{justifyContent:"center",alignItems:"center",alignSelf:"center"}}
    id="navloader"
  /></div>,document.querySelector('#spinner-root')
  )
}

export default GlobalSpinner