import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import './header.styles.scss'


class HeaderClass extends Component {
  state = {open:false}
  handleClick = ()=> {
    this.setState({
      open:!this.state.open
    })
    console.log('open')
  }
  render() {
    return (
      <div className="container header-wrap">
        <div className="row header">
          <div className="col-6 align-self-start align-items-center logo">
            <img src="http://localhost/acb/wp-content/uploads/2021/03/logo.png" alt=""/>
          </div>
          <div className="col-6 align-self-end nav">
            <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
            />
          </div>
        </div>
        <div className={`menu ${this.state.open ? 'menu-opened' : 'menu-closed'}`}>
          <div className=" nav-item"><Link to='/'> Home</Link></div>
          <div className=" nav-item"><a href="https://shop.angelcitybrigade.net" rel="noreferrer" target="_blank"> Shop </a></div>
          <div className=" nav-item"> <Link to="/chants"> Chants</Link></div>
          <div className="-md-auto nav-item"> <Link to="/viewing-parties"> Viewing Parties</Link></div>
          <div className=" nav-item">Contact Us</div>
          <div className=" nav-item"><Link to="/about"> About Us</Link></div>
          <div className=" nav-item"><Link to="/faq">FAQ</Link></div>
        </div>
    </div>
    )
  }
}

export default HeaderClass
