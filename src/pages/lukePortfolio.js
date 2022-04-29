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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
          </p>
          
        </div>
        <div className='disquscontainer'>
        <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
        </div>
        </main>
    
      )
}
export default LukePage