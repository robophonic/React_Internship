import React, { Component } from 'react'

import logo from '../../asserts/images/logo.svg'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <a href="/" rel="noreferrer" className="">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="nav">
              <li className="has_dropdown" onClick={MobMenuToggle}>
                <a href="\#" rel="noreferrer" className="inactive">
                  Problem & Challenges
                </a>
                <ul>
                  <li>
                    <a href="\#" rel="noreferrer">
                      History
                    </a>
                  </li>
                  <li>
                    <a href="\#" rel="noreferrer">
                      Problem industry
                    </a>
                  </li>
                  <li>
                    <a href="\#" rel="noreferrer">
                      Challenge
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has_dropdown" onClick={MobMenuToggle}>
                <a href="\#" rel="noreferrer" className="inactive">
                  Platform & Foundation{' '}
                </a>
                <ul>
                  <li>
                    <a href="\#" rel="noreferrer">
                      OUR VISION
                    </a>
                  </li>
                  <li>
                    <a href="\#" rel="noreferrer">
                      What Makes Us Different
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has_dropdown" onClick={MobMenuToggle}>
                <a href="\#" rel="noreferrer" className="inactive">
                  Token
                </a>
                <ul>
                  <li>
                    <a href="\#" rel="noreferrer">
                      UOP Token
                    </a>
                  </li>
                  <li>
                    <a href="\#" rel="noreferrer">
                      Token Economics
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="\#" rel="noreferrer">
                  OUR OPERATIONS
                </a>
              </li>
            </ul>
          </div>
          <div className="menu_btn" onClick={OpenMobMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    )
  }
}

const OpenMobMenu = () => {
  document.querySelector('header').classList.toggle('active')
  document.querySelector('body').classList.toggle('active')
}

const MobMenuToggle = () => {
  this.classList.toggle('open')
}

export default Header
