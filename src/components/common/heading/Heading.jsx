<<<<<<< HEAD
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
=======
import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
