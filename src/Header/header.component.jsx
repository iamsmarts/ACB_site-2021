import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className="row header">
    <div className="col-2 logo">LOGO</div>
    <div className="col nav">
      <div className="row nav-wrap">
        <div className="col nav-item"><Link to='/'> Home</Link></div>
        <div className="col nav-item">Shop</div>
        <div className="col nav-item"> <Link to="/chants"> Chants</Link></div>
        <div className="col-md-auto nav-item"> <Link to="/viewing-parties"> Viewing Parties</Link></div>
        <div className="col nav-item">Contact Us</div>
        <div className="col nav-item"><Link to="/about"> About Us</Link></div>
        <div className="col nav-item"><Link to="/faq">FAQ</Link></div>
      </div>
    </div>
  </div>
  )
}

export default Header
