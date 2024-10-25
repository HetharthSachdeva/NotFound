import React from "react"
import AboutCard from "../about/AboutCard"
<<<<<<< HEAD
import Hblog from "./Hblog"
import HAbout from "./HAbout"
=======
import HAbout from "./HAbout"
import Hblog from "./Hblog"
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
