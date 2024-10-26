import React, { useEffect } from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row' data-aos="fade-up" data-aos-duration="2000">
            <Heading subtitle='WELCOME TO VRWell' title='Ultimate VR Wellness Partner' />

            <p>
              Experience a unified platform that enhances physical health, cognitive functions, and social connection. Tailored specifically for seniors, our VR Wellness Companion offers immersive exercises, brain-stimulating games, and virtual meetups.
            </p>

            <p>Experience a unified platform that enhances physical health, cognitive functions, and social connection. Tailored specifically for seniors, our VR Wellness Companion offers immersive exercises, brain-stimulating games, and virtual meetups.</p>
            

          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
