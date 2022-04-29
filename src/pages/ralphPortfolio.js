import * as React from 'react'
import "./../styles/global.css"
import "./../styles/ralph.css"
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
        
        {/* Font Awesome css */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous"></link>
        
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

          <p>I have experience with...</p>

          <section id="technologies">
            
            <div class="techrow">

              <div class="html5" id="xd">
                  <i class="fab fa-html5"></i>
                  <strong>HTML5</strong>
              </div> 
              
              <div class="css"> 
                  <i class="fab fa-css3-alt"></i>
                  <strong>CSS3</strong>
              </div>

              <div class="js">
                  <i class="fab fa-js-square"></i>
                  <strong>JavaScript</strong> 
              </div>

              <div class="and">
                  <i class="fab fa-android"></i>
                  <strong>Android</strong>
              </div>

              <div class="java">
                  <i class="fab fa-java"></i>
                  <strong>Java</strong>
              </div>


              <div class="python">
                  <i class="fab fa-python"></i>
                  <strong>Python</strong>
              </div>
              
            </div>

          </section>

          <p>You can reach me on <a href='https://www.linkedin.com/in/ralph-nahra-2284044a/'>LinkedIn</a></p>

        </div>
        <div className='disquscontainer'>
        <DiscussionEmbed shortname={"team-mrlc-site"} config={disqusConfig} />
        </div>
      </main>
    
      )
}
export default RalphPage