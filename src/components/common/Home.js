import React from 'react'
import { Link } from 'react-router-dom'

import Profile from '../assets/gym-3.JPG'
import T1 from '../assets/transform-1.JPG'
import T2 from '../assets/transform-2.JPG'
import T3 from '../assets/gym-5.JPG'

class Home extends React.Component{

  render(){
    return(
      <section className="section">
        <div className="home-body">
          <h1 className="faq-title" id="title-main">Welcome to a PCOS party</h1>
          <div className="home-container">
            <img src={Profile} id="profile" alt="profile"/>
            <p className="intro">Hello! I'm Georgie Ricks, A degree qualified nutritionist, Level 3 personal trainer and life coach specialising in PCOS. After suffering for 15 years, losing 30kg and getting all my symptoms under control, I am on a mission to help you become strong, confident, healthy and happy - as that's exactly what we all deserve. P.s. The best part? I still drink wine, like to party, stay in shape and feel great - which you can do too! </p>
          
          <h2 className="title" id="title-main">My Journey</h2>
          <img src={T1} id="transform" alt="transformation"/>
          <p className="quote">Are you constantly tired, puffy and bloated?</p>
          <br/>
          <p className="quote">Have you tried EVERY diet under the sun? </p>
          <br/>
          <p className="quote">Slave away in the gym but still get no results? </p>
          <br/>
          <p className="quote"> Don’t worry, that was me. I was in the same boat, so can totally relate. </p>
          <br/>
          <p className="quote"> I managed to turn my life around for the better.</p>
          <img src={T2} id="transform" alt="transformation"/>
          <p className="quote">Let me help you love yourself again and live your best life.</p>
          <br/>
          <p className="quote">We’ve only got one at the end of the day so let’s make it count!</p>
          <img src={T3} id="transform" alt="transformation"/>
          <br/>
          <Link to="/contact" className="button" alt="link"><span>CLICK NOW! For your FREE consultation call</span></Link>
          </div>
        </div>
      </section>
    )
  }

}
export default Home