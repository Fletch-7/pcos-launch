import React from 'react'
import T1 from '../assets/transform-3.JPG'

// import G1 from '../assets/beach.JPG'

class Diet extends React.Component{
  render(){
    return(
      <section className="section" id="subscribe">
        <div className="container">
          <div className="faq-body">
        <h2 className="title" id="title-main">Its a PCOS party everyday!</h2>
        <h3 className="t2">Please click the button below and sign-up to receive your free action plan</h3>
        <br/>
        <a href="http://eepurl.com/g1UQLH" className="button" alt="link"><i className="far fa-smile-beam fa-2x"></i><span>GET YOUR FREE PLAN TODAY!</span></a>
        <br/>
        <img src={T1} id="transform" alt="transformation"/>
        <br/>
        {/* <img src={G1} id="profile" alt="pic"/> */}
        </div>
        </div>
      </section>
    )
  }
}

export default Diet