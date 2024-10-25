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
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/bgdown.png' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='Features' title='Benefits of getting enrolled' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' data-aos= "fade-left" data-aos-duration="{val.id}*1000">
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
