import React from "react"
// import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./slider"
import Sold from "../sold/sold"


const Home:React.FC = () => {
  return (
    <>
      <section className='home'>
        <div className='cont d_flex'>
           
          <SliderHome />
 
      
        </div>
        <Sold/>
      </section>
    </>
  )
}
export default Home