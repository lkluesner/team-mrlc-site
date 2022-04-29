import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

const disqusConfig = {
    identifier: 'lukePortfolio', // you can define anything as "identifier" for each blog post
    title: 'Luke Portfolio',
    url: 'https://teammrlcsitemain.gatsbyjs.io/lukePortfolio', 
  }


const LukePage = () => {
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
          
          <h1>Luke</h1>
          <h2>About</h2>
          
          <p>
            My name is Luke Kluesner and I am a senior at the University of Iowa. My major is Computer Science and Engineering with a focus in Software Engineering. I love to hike and ski whenever I get the chance! In my free time you can usually find me hanging out with my friends. I love being outside and building things!
          </p>
          <div className='imagecontainer lukePic1'>
          </div>
          <br></br>
          <div className='imagecontainer lukePic2'>
          </div>
          <p>
            The pictures above are of me hiking Camelback Mountain in Arizona, and of me on a ski trip in Aspen, CO.
          </p>
          <h2>Projects</h2>
          <div className='imagecontainer lukePic3'>
          </div>
          <br></br>
          <h3>IOT Automated Chessboard</h3>
          <p>
            One of the projects I'm working on is an IOT Automated Chessboard. This project combines the feel of real chess board, with the convience of online chess. Users will be able to play on a real chess board with someone hundreds of miles away. They will also be able to replay famous chess matches from history and see them played in front of their eyes. Lastly they can play an AI opponent on a real chess board with ease. This project works by having an XY plotter, I designed, control the movement of the pieces using magnets embedded in the pieces. Majority of the pieces are 3d printed. The XY table is controlled by custom arduino code using the AccelStepper library, and the chess game is controlled on a raspberry pi utilizing the stockfish engine. This project picture is of it still in progress, and the final prototype will be much nicer.
          </p>
          <div className='imagecontainer lukePic4'>
          </div>
          <br></br>
          <h3>Uiowa Hospitals HCIS "ipmac" Project</h3>
          <p>
            Another Project I am working on is for the University of Iowa Hospitals and Clinics Network Team. This project scans the hospital network using an SNMP script I wrote using PySNMP to get the devices connected to the network. This then stores this data in a timestamped MySQL server. This project also includes a multitude of different scripts to search the data stored in the MySQL server to help the Network Team diagnose problems faster. It has been a fun project where I gained alot of experience developing software in a professional enviroment.
          </p>
          
          
        </div>
        <div className='disquscontainer'>
        <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
        </div>
        </main>
    
      )
}
export default LukePage