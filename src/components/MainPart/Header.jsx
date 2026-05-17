import React from 'react'
import './headerCss.css'
function Header() {
  return (
    <>
    <div id='home-section' className="header">
      <header>
          <div className="firstData">
              <div className="logo"></div>
              <h1>Ahmed Taher</h1>            
          </div>
          <div className="links">
              <a href="#home-section">Home</a>
              <a href="#about-br-section">About</a>
              <a href="#Skill-Section">Skills</a>
              <a href="#Services-Section">Services</a>
              <a href="#">Contact</a>
              <button className="button">
              Contact
              </button>
          </div>

      </header>
      <div className="lightPart"></div>
    </div>

    </>
  )
}

export default Header