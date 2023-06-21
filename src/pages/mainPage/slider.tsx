import React from "react"
import SlideCard from "./carousel"

const SliderHome:React.FC = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='cont'>
          <SlideCard/>
        </div>
      </section>
    </>
  )
}

export default SliderHome