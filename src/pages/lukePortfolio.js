import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import { DiscussionEmbed } from 'disqus-react'

const disqusConfig = {
    identifier: 'lukePortfolio', // you can define anything as "identifier" for each blog post
    title: 'Luke Portfolio',
    url: 'https://teammrlcsitemain.gatsbyjs.io/lukePortfolio', 
  }


const LukePage = () => {
    return (
        <main>
        <div className="container">
          <title>Team MRLC</title>
          
            <h1>Team MRLC</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
          </p>
          
        </div>
        <div className="container">
          <h1>Our Team</h1>
          <Link to="/mattPortfolio"><button>M</button></Link>
          <Link to="/ralphPortfolio"><button>R</button></Link>
          <Link to="/lukePortfolio"><button className="lukeButton">L</button></Link>
          <Link to="/chrisPortfolio"><button>C</button></Link>
        </div>
        <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
        </main>
    
      )
}
export default LukePage