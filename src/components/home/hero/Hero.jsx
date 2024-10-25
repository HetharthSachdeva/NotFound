<<<<<<< HEAD
import React, { useEffect } from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(()=>{
    AOS.init();
  },[])
=======
import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
  return (
    <>
      <section className='hero'>
        <div className='container'>
<<<<<<< HEAD
          <div className='row' data-aos="fade-up" data-aos-duration="2000">
            <Heading subtitle='WELCOME TO ACADEMIA' title='Ultimate VR Wellness Partner' />
            <p>Transforming wellness with immersive VR experiences tailored for you.</p>
=======
          <div className='row'>
            <Heading subtitle='WELCOME TO ARWELLNESS' title='Empowering Seniors Through VR Wellness' />
            <p>Experience a unified platform that enhances physical health, cognitive functions, and social connection. Tailored specifically for seniors, our VR Wellness Companion offers immersive exercises, brain-stimulating games, and virtual meetups.</p>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
<<<<<<< HEAD
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
=======
                VIEW PROGRAMS <i className='fa fa-long-arrow-alt-right'></i>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
