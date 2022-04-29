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
        <h2>About</h2>
        <div className='imagecontainer chrisPic1'>

        </div>
        <p>
        I am a Senior, double major in Computer Science and Computer Engineering. My goal is to be a member of a cutting-edge company that will allow me to build on my experience to develop, and maintain a wide variety of software applications, exposure to artificial intelligence, machine learning, coding and critical thinking. Ideally, I would like an Internship or Co-Op, in or out of state, that can offer an ongoing relationship that will expand and grow as my knowledge, skill set and coursework becomes more specialized with an opportunity for employment after graduation. 
        </p>
        <h2>Hobbies</h2>
        <div className='imagecontainer lukePic2'>

        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
        </p>
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