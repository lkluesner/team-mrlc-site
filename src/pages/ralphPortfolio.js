import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import { DiscussionEmbed } from 'disqus-react'

const disqusConfig = {
    identifier: 'ralphPortfolio', // you can define anything as "identifier" for each blog post
    title: 'Ralph Portfolio',
    url: 'https://teammrlcsitemain.gatsbyjs.io/ralphPortfolio', 
  }

const RalphPage = () => {
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
          <title>Ralph</title>
          
          <h1>Ralph</h1>
          <h2>About</h2>
          <div className='imagecontainer ralphPic'>

          </div>
          <p>
            Hello I'm Ralph, a Computer Science & Engineering major at the University of Iowa. I'm interested in computer security,
            systems programming, and open-source software. I have a breadth of experiences in software development, from working on modern
            web applications to embedded systems. In my free time I enjoy playing video games, skateboarding, and playing guitar.
          </p>
          
        </div>
        <div className='disquscontainer'>
        <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
        </div>
      </main>
    
      )
}
export default RalphPage