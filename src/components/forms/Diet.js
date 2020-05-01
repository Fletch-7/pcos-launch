import React from 'react'

// import G1 from '../assets/beach.JPG'

class Diet extends React.Component{
  render(){
    return(
      <section className="section" id="subscribe">
        <div className="container">
          <div className="faq-body">
        <h2 className="title">Its a PCOS party everyday!</h2>
        <h3 className="t2">Please click the link and sign-up to receive your free action plan</h3>
        <br/>
        <a href="http://eepurl.com/g1UQLH" className="button" alt="link"><i class="far fa-smile-beam fa-2x"></i><span>YAAAAAAAAAAS QUEEN!</span></a>
        <br/>
        {/* <img src={G1} id="profile" alt="pic"/> */}
        </div>
        </div>
      </section>
    )
  }
}

export default Diet