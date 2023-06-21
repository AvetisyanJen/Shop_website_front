import React from "react"
import "./header.css"

import Search from "./search"
import Navbar from "./navBar"

const Header:React.FC = () => {
  return (
    <>
      <Search />
      <Navbar />
    </>
  )
}
export default Header