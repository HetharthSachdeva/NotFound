import React from "react"
import Back from "../common/back/Back"
<<<<<<< HEAD
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
=======
import Faq from "./Faq"
import PriceCard from "./PriceCard"
import "./price.css"
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
