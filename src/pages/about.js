import * as React from 'react'
import "./../styles/global.css"
import { Link } from 'gatsby'

const AboutPage = () => {
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
          
          <h1>Our Team</h1>
          <h2>Our Members</h2>
          <div className='imagecontainer'>
          </div>
          <br></br>
          <div className="container">
          
          <Link to="/mattPortfolio"><button className="mattButton imageButton">M</button></Link>
          <Link to="/ralphPortfolio"><button className="ralphButton imageButton">R</button></Link>
          <Link to="/chrisPortfolio"><button className="chrisButton imageButton">C</button></Link>
          <Link to="/lukePortfolio"><button className="lukeButton imageButton">L</button></Link>
          </div>
          <div className="container">
            <h3>Matt</h3>
            <h3>Ralph</h3>
            <h3>Chris</h3>
            <h3>Luke</h3>
          </div>
          <h2>Our Projects</h2>
          
            <h3>Lab1</h3>
            <p>
              For this lab we were tasked with creating a box that has a temperature probe connected capable of reading temperature data. 
              After reading this data, we want to be able to view this data in a graphical format in real time. 
              We also want to be alerted via text message when the temperature falls outside a certain range. 
            </p>
            <h3>Lab2</h3>

            <p>
            In this lab we were tasked with designing and creating an “electric eye” light beam-interrupter safety system. 
            The project consists of two devices, the transmitter and the receiver. 
            The transmitter was designed for us, and we were tasked with creating a receiver that can filter out noise from the signal generated from the transmitter. 
            When the light beam is interrupted the receiver should trigger both a local warning light and send an alert text message with the date and time stamp. 
            In this lab we successfully created a receiver capable of these specifications, and we were able to filter the “noise” of the outside light to successfully create this “electronic eye”. 
            </p>
            <h3>Lab3</h3>
            <p>You are looking at our 3rd design lab right now! It is this portfolio website, where we learned about UI/UX design. We utilized gatsby and disqus to make a team portfolio page where users can comment. It was a super fun project and a great way to finish the semester.</p>


         
          <h2>Our Final Project</h2>
          <p>
            For our final senior design project we are working in coordination with a sponser, the Toor Lab. Together we are developing a IOT data aquisition platform that utilizes a sensor developed by the Toor lab to detect cancer in easy and fast way. We are starting this project next semester and are very excited to get started!
          </p>
          
          
        </div>
        </main>
  )
}
export default AboutPage