import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'


const IndexPage = () => {
  return (
    <main>
    <div className="container">
      <title>Team MRLC</title>
      
      <h1>Team MRLC</h1>
      <div className='imagecontainer'>

      </div>
      <br></br>
      <div className="buttoncontainer">
      <Link to="/about">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
      </Link>
      </div>
      
    </div>
    <div className="container">
      <h1>Our Members</h1>
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
    
    </main>

  )
}
export default IndexPage