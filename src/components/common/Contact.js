import React from 'react'

import P1 from '../assets/gym-1.JPG'
import P2 from '../assets/profile-2.JPG'

class Contact extends React.Component{
  render(){
    return(
      <section className="section" >
        <div className="contact">
        <div className="container">
        <h1 className="title">Contact</h1>
        <br/>
        <p>I want to reiterate how you are not alone and I am here to help. I want to cut all the corners for you and teach you everything I know so you can lose weight, feel amazing and be on the right path to living your best life. </p>
        <br/>
        <p>Want to know prices and set up a FREE consultation call? Get in contact today!</p>
        <br/>
        <a href="mailto:itsapcosparty@gmail.com" className="button" alt="link"><i className="far fa-envelope"></i><span>itsapcosparty@gmail.com</span></a>
        <a href="tel:+44 7949 836 939" className="button" alt="link"><i className="fas fa-phone"></i><span>Call Me : +44 7949 836 939</span></a>
        <br/>


        <div className="contact-pics">
          <div className="pic-container">
            <img src={P1} id="profile" alt="pic"/>
            <img src={P2} id="profile" alt="pic"/>
          </div>
        </div>

        </div>
        </div>

      </section>
    )
  }
}

export default Contact