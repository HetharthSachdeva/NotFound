import React from "react"
import { blog } from "../../dummydata"

const BlogCard = () => {
  return (
    <>
<<<<<<< HEAD
      {/* {blog.map((val) => (
=======
      {blog.map((val) => (
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
              <span>
                <i className='fa fa-user'></i>
                <label htmlFor=''>{val.type}</label>
              </span>
              <span>
                <i className='fa fa-calendar-alt'></i>
                <label htmlFor=''>{val.date}</label>
              </span>
              <span>
                <i className='fa fa-comments'></i>
                <label htmlFor=''>{val.com}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
<<<<<<< HEAD
      ))} */}
=======
      ))}
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
    </>
  )
}

export default BlogCard
