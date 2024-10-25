<<<<<<< HEAD
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
=======
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
<<<<<<< HEAD
      <header data-aos="fade-left" data-aos-duration="2000">
=======
      <header>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
<<<<<<< HEAD
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
=======
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
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
