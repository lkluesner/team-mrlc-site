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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
        </p>
        <div className='imagecontainer lukePic2'>

        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
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
export default ChrisPage