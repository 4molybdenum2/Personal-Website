import React from "react"
import "../styles/styles.scss"

import Scrollbar from "smooth-scrollbar"

//Import Components
import Header from "../components/header"
import Banner from "../components/banner"


const IndexPage = () => (
  <div className="container">
    <Header/>
    <Banner/>
  </div>
)

export default IndexPage
