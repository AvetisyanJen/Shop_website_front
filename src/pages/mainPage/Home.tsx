import React from "react"
// import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./slider"


const Home:React.FC = () => {
  return (
    <>
      <section className='home'>
        <div className='cont d_flex'>
          {/* <Categories /> */}
          <SliderHome />
        </div>
      </section>
    </>
  )
}
export default Home