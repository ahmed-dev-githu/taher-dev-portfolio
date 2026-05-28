import React, { useState } from 'react'
import './headerCss.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='home-section' className="header">
      <header>
          <div className="firstData">
              <div className="logo"></div>
              <h1>Ahmed Taher</h1>            
          </div>

          {/* زرار البرجر */}
          <div className={`burger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
          </div>

          <div className={`links ${isOpen ? 'open' : ''}`}>
              <a href="#home-section" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about-br-section" onClick={() => setIsOpen(false)}>About</a>
              <a href="#Skill-Section" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#Services-Section" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#projects-section" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact-section" onClick={() => setIsOpen(false)}>
                  <button className="button">Contact</button>
              </a>
          </div>
      </header>
      <div className="lightPart"></div>
    </div>
  )
}

export default Header