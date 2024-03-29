import { useEffect } from "react"
import React from 'react'
import './LandingPage.css'
import doc_img from '../images/doc-img.jpg'


const LandingPage = () => {

  return (
    <>

      <div className="container">
        <div className="box">
          <img src={doc_img} alt="" />
          <p className="intro"> We always have time to go above and beyond for our patients. </p>
          <button className="btn"> Favourites </button>
        </div>
      </div>

    </>
  )
}

export default LandingPage
