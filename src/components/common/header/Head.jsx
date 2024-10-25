import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"
const Head = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <section className='head'>
        <div className='container flexSB' data-aos="fade-right" data-aos-duration="2000">
          <div className='logo' >
            <h1>ACADEMIA</h1>
            <span>VR/AR COMPANION</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
