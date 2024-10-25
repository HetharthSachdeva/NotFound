import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header data-aos="fade-left" data-aos-duration="2000">
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/team'>Dashboard</Link>
            </li>
            <li>
              <Link to='/courses'>VR/AR Games</Link>
            </li>
            <li>
              <Link to='/about'>Features</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>LOGOUT</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
