import React from "react"
<<<<<<< HEAD
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
=======
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
