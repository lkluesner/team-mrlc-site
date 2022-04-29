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
          
          <h1>About Our Team</h1>
          <h2>About Our Team</h2>
          <div className='imagecontainer'>
          </div>
          <div className="container">
          <h1>Our Members</h1>
          <Link to="/mattPortfolio"><button className="mattButton imageButton">M</button></Link>
          <Link to="/ralphPortfolio"><button className="ralphButton imageButton">R</button></Link>
          <Link to="/chrisPortfolio"><button className="chrisButton imageButton">C</button></Link>
          <Link to="/lukePortfolio"><button className="lukeButton imageButton">L</button></Link>
          </div>
          <p>

          </p>
          
          
        </div>
        </main>
  )
}
export default AboutPage