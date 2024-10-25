import React from "react"
<<<<<<< HEAD
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
=======
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import "./courses.css"
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
<<<<<<< HEAD
          <Heading subtitle='Games' title='Explore Our Engaging Games' />
=======
          <Heading subtitle='COURSES' title='Browse Our Programs' />
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
