import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import { DiscussionEmbed } from 'disqus-react'

const disqusConfig = {
    identifier: 'chrisPortfolio', // you can define anything as "identifier" for each blog post
    title: 'Chris Portfolio',
    url: 'https://teammrlcsitemain.gatsbyjs.io/chrisPortfolio', 
  }


const ChrisPage = () => {
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
        <title>Chris</title>
        
        <h1>Chris</h1>
        <p> Check out my LinkedIn <Link to="" >LinkedIn</Link></p>
        <h2>About</h2>
        <div className='imagecontainer chrisPic1'>

        </div>
        <p>
        I am a Senior, double major in Computer Science and Computer Engineering. My goal is to be a member of a cutting-edge company that will allow me to build on my experience to develop, and maintain a wide variety of software applications, exposure to artificial intelligence, machine learning, coding and critical thinking. Ideally, I would like an Internship or Co-Op, in or out of state, that can offer an ongoing relationship that will expand and grow as my knowledge, skill set and coursework becomes more specialized with an opportunity for employment after graduation. 
        </p>
        <h2>Skills/Interests</h2>
        <p>
        
        </p>
        <h2>Experience</h2>
        <h3>Data Science / Analytics Internship  </h3>
        <p>
        My most recent experience was Data Science / Analytics intern at John Deere Financial doing time series forecasting. As a result I learned a lot about the innerworkings of a captive financial institution and how customer financial data can be leveraged with statistical forecasting methods to predict future outcomes.
        </p>
        <h3>Data architecture</h3>
        <p>
        Before that I worked for the data architecture team at John Deere Intelligent Solutions group where I did a lot of work on data visualization of on-board transactional sensor measurements.
        </p>
        <h3>Product Engineering</h3>
        <p>
        I have been an integral part in product development for an IoT mechanical chessboard that utilizes electric motors, path finding algorithms, and AI chess engines to play against a real person on a physical chess board.
        </p>
        <h2>Hobbies</h2>
        <p>
          My primary hobbies are:
          <ul>
            <li>Ourdoor adventures</li>
            <li>Snow and Water sports</li>
            <li>Reading</li>
            <li>Working out</li>
            <li>Hangin' with doggos</li>
          </ul>
        </p>
        <div className='imagecontainer chrisDoggos'>

        </div>
        <h2>Projects</h2>
        <h3>IoT Mechanical Chess Board</h3>
        <p>
          Thanks to the netflix series "Queens Gambit", myself and a few buddies have enjoyed
          learning the game chess. We learned by playing online chess, which is fun and all, but lacks some
          important aspects that a physical game provides. This motivated us to create a mechanical chess
          board capable of sliding chess pieces accross the board to play the human user. This project has 
          allowed us to use different aspects of Computer Science we've learned throughout the year like 
          electric stepper motors, path finding algorithms and AI enabled chess engines. We were successful in 
          presenting a function prototype and enjoyed engineering the product from scratch.
        </p>
        <div className='imagecontainer chrisChessPic'>

        </div>
      </div>
      <div className='disquscontainer'>
      <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
      </div>
      </main>
  
    
      )
}
export default ChrisPage