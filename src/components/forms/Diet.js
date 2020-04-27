import React from 'react'

class Diet extends React.Component{
  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="faq-body">
        <h2 className="title">Its a PCOS party everyday!</h2>
        <h3 className="t2">Please fill out your details below to get my free PCOS weight loss action plan</h3>
        </div>
          <div className="columns">
            <form action="mailto:r.a.m.fletcher7@gmail.com" method="POST" className="column is-half is-offset-one-quarter">
              <br/>
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-left">
                  <input 
                    className="input"
                    placeholder="Name"
                    required
                    type="text"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left"> 
                  <input 
                    className="input"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <button type="submit" className="button is-warning is-fullwidth">Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Diet