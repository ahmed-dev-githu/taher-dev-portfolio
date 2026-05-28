import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div id="contact-section">
      <div className="container">
        <div className="containerSpan"><span className="section-title">Get In Touch</span></div>
        
        
        <div className="contact-wrapper">
          {/* الجزء الأيسر: البيانات الشخصية */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new projects, creative ideas, or security audits.</p>
              <br></br>
              <div className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <span>Email Me</span>
                  <a className="a-mail" href="mailto:ahmed.dev.vortex@gmail.com">ahmed.dev.vortex@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <span>Call Me</span>
                  <a href="tel:+201557160730">+20 155 716 0730</a>
                </div>
              </div>

              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <span>Location</span>
                  <p>Egypt</p>
                </div>
              </div>

              <div className="social-links-contact">
                <a href="https://www.facebook.com/profile.php?id=61578296423872" className="facebook" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@eng.ahmed.vortex?_r=1&_t=ZS-95BLm4bcUpF" className="tiktok" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="https://github.com/ahmed-dev-githu" className="github" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* الجزء الأيمن: "الجوكر" (إحصائيات سريعة أو حالة العمل) */}
          <div className="contact-status">
            <div className="status-card">
              <div className="status-header">
                <div className="status-dot"></div>
                <span>Available for Projects</span>
              </div>
              <div className="status-content">
                <h4>Why Work With Me?</h4>
                <ul>
                  <li><i className="fa-solid fa-check"></i> Expert in Web Security</li>
                  <li><i className="fa-solid fa-check"></i> High Performance Coding</li>
                  <li><i className="fa-solid fa-check"></i> Hardware & Software Knowledge</li>
                  <li><i className="fa-solid fa-check"></i> Fast Problem Solving</li>
                </ul>
                <div className="vortex-badge">
                   <p>VORTEX SYSTEM v3.0</p>
                </div>
              </div>
            </div>
          </div>

        </div>
                <div className="lightParent"></div>
        <div className="lightPar2ent"></div>
        <div className="lightPar3ent"></div>
      </div>

    </div>
  )
}