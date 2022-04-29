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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
      </p>
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