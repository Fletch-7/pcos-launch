import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    state = { navbarOpen: false }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render(){
    const { navbarOpen } = this.state
    return(
      <nav className="navbar is-fixed-top is-transparent" id="navi">
      <div className="container">
      <div className="navbar-brand">
      <Link className="navbar-item" to="/pcos-launch">PCOS PARTY</Link>
        <span className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar} alt="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </span>
      </div>
      <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
        <Link className="navbar-item" to="/diet">Action Plan</Link>
        <Link className="navbar-item" to="/faq">FAQ</Link>
        <Link className="navbar-item" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
      </nav>
    )
  }

}
export default Navbar