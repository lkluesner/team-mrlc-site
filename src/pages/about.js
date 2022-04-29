import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
        <div className="backbuttoncontainer">
            <Link to="../">
            <button className="back-button">
              <span className="back-circle" aria-hidden="true">
              <span className="back-icon arrow"></span>
              </span>
              <span className="back-button-text">Back</span>
            </button>
            </Link>
          </div>
        <div className="container">
          <title>Luke</title>
          
          <h1>Our Team</h1>
          <h2>Our Members</h2>
          <div className='imagecontainer'>
          </div>
          <br></br>
          <div className="container">
          
          <Link to="/mattPortfolio"><button className="mattButton imageButton">M</button></Link>
          <Link to="/ralphPortfolio"><button className="ralphButton imageButton">R</button></Link>
          <Link to="/chrisPortfolio"><button className="chrisButton imageButton">C</button></Link>
          <Link to="/lukePortfolio"><button className="lukeButton imageButton">L</button></Link>
          </div>
          <div className="container">
            <h3>Matt</h3>
            <h3>Ralph</h3>
            <h3>Chris</h3>
            <h3>Luke</h3>
          </div>
          <h2>Our Projects</h2>
          <p>
            <h3>Lab1</h3>
            <p></p>
            <h3>Lab2</h3>
            <p></p>
            <h3>Lab2</h3>
            <p></p>

          </p>
          <h2>Our Final Project</h2>
          <p>

          </p>
          
          
        </div>
        </main>
  )
}
export default AboutPage