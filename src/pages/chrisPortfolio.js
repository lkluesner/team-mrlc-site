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
        <div className="container">
          <title>Chris</title>
          
            <h1>Chris</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
          </p>
          
        </div>
        <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
        </main>
    
      )
}
export default ChrisPage