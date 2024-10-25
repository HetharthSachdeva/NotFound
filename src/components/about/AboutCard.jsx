<<<<<<< HEAD
import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCard = () => {
  useEffect(()=>{
    AOS.init();
  },[])
=======
import React from "react"
import { homeAbout } from "../../dummydata"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"

const AboutCard = () => {
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
<<<<<<< HEAD
            <img src='./images/bgdown.png' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='Features' title='Benefits of getting enrolled' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' data-aos= "fade-left" data-aos-duration="{val.id}*1000">
=======
          <img src="https://venturebeat.com/wp-content/uploads/2022/04/GettyImages-1356420393.jpg" alt="VR Wellness Companion" />
          </div>
          <div className="right row">
            <Heading subtitle="HOLISTIC WELLNESS" title="VR Wellness Companion for Seniors" />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
