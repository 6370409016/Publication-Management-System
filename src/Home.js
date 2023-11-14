import React from 'react'
import "./Home.css"
import video from './Assests/Cutmbg.mp4'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="middile-container">
        <video autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>

      </div>

      <Footer />



    </div>

  )
}
