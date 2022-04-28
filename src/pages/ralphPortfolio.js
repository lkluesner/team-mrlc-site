import * as React from 'react'
import Layout from '../components/layout'
import "./../styles/global.css"
import { Link } from 'gatsby'


const RalphPage = () => {
  return (
    <Layout pageTitle="RALPH">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna lorem, congue et elit eu, consequat pretium libero. Nam imperdiet fringilla tristique. Morbi ut euismod tortor, id sagittis turpis. Proin euismod leo quis congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac mollis mi. Nam odio elit, efficitur et accumsan vitae, ultrices malesuada nisl. Vestibulum elementum mauris in tortor semper, molestie auctor augue laoreet.
      </p>
    <Layout pageTitle="Our Team">
      <Link to="../mattPortfolio"><button>Matt</button></Link>
      <Link to="../ralphPortfolio"><button>Ralph</button></Link>
      <Link to="../lukePortfolio"><button>Luke</button></Link>
      <Link to="../chrisPortfolio"><button>Chris</button></Link>
    </Layout>
    </Layout>

  )
}
export default RalphPage