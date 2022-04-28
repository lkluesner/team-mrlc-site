import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import { DiscussionEmbed } from 'disqus-react'

const disqusConfig = {
    identifier: 'mattPortfolio', // you can define anything as "identifier" for each blog post
    title: 'Matt Portfolio',
    url: 'https://teammrlcsitemain.gatsbyjs.io/mattPortfolio', 
  }


const MattPage = () => {
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
          <title>Matt</title>
          
          <h1>Matt</h1>
          <h2>About</h2>
          <div className='imagecontainer mattPic1'>

          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
          </p>
          <div className='imagecontainer mattPic2'>

          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
          </p>
          <h2>Projects</h2>
          <p>
            One project that I worked on outside of school was building a pneumatic potato cannon! It was a really fun project that also taught me a lot about the fundamentals of pneumatics. Another project I’ve worked on outside of school is an automatic plant waterer. This involved using a soil moisture sensor that sends the moisture percentage of the soil to an Arduino. From there, the Arduino can control an electric pump that waters the plant. This project was a little more difficult, but also very fun and taught me a lot about electronics. 
          </p>
          
        </div>
        <div className='disquscontainer'>
        <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
        </div>
        </main>
    
      )
}
export default MattPage
