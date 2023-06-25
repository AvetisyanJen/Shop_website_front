import React from "react"

import "./style.css"
import Purchases from "./totalPurchases"

const Sold:React.FC= () => {
  return (
    <>
      <section className='flash'>
        <div className='cont'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Most sold</h1>
          </div>
          <Purchases/>
        </div>
      </section>
    </>
  )
}

export default Sold