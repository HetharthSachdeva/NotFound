import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
<<<<<<< HEAD
        {/* <div className='container'>
=======
        <div className='container'>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
      </section>
    </>
  )
}

export default Testimonal
