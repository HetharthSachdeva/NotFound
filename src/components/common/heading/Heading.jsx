import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = ({ subtitle, title }) => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <div id='heading' data-aos="fade-up" data-aos-duration="2000">
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
