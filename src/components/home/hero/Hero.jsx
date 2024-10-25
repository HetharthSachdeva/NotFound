import React, { useEffect } from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row' data-aos="fade-up" data-aos-duration="2000">
            <Heading subtitle='WELCOME TO ACADEMIA' title='Ultimate VR Wellness Partner' />
            <p>Transforming wellness with immersive VR experiences tailored for you.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
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
