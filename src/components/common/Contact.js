import React from 'react'

import P1 from '../assets/gym-1.JPG'
import P2 from '../assets/profile-2.JPG'
import P3 from '../assets/beach.JPG'
import P4 from '../assets/beach-2.JPG'

class Contact extends React.Component{
  render(){
    return(
      <section className="section" >
        <div className="contact">
        <div className="container">
        <h1 className="title"id="title-main">Contact</h1>
        <br/>
        <p>I want to reiterate how you are not alone and I am here to help. I want to help cut the corners for you and teach you everything I know and have experienced. That way you can be on the right path to living your best life! </p>
        <br/>
        <p>Want to know prices and set up a FREE consultation call? Get in contact today!</p>
        <br/>
        <div className="contact-container">
        <img src={P3} id="profile" alt="pic" className="is-flex-mobile"/>
        <img src={P4} id="profile" alt="pic" className="is-hidden-mobile"/>
        </div>
        <br/>
        <a href="mailto:itsapcosparty@gmail.com" className="button" alt="link"><i className="far fa-envelope"></i><span>itsapcosparty@gmail.com</span></a>
        <a href="tel:+44 7949 836 939" className="button" alt="link"><i className="fas fa-phone"></i><span>Call Me : +44 7949 836 939</span></a>
        <br/>
        <p className="NB">Please have the following ready before your consultation:</p>
        <ul>
              <li>A date you are available</li>
              <li>A time slot that suits you</li>
              <li>Questions and goals you would like to discuss!</li>
          </ul>
        <br/>

        <div className="contact-pics">
          <div className="contact-container">
            <img src={P1} id="profile" alt="pic" className="is-flex-mobile"/>
            <img src={P2} id="profile" alt="pic" className="is-hidden-mobile"/>
          </div>
        </div>

        </div>
        </div>

      </section>
    )
  }
}

export default Contact