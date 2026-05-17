import React from 'react'
import './MainCss.css'
function MainPart(){
  return (
    <div id='MainPart' className="MainPart">
        <h1>I am Ahmed</h1>
        <div className="WhoJop">
            <span>Front-End</span>
            <span>Web Developer</span>
        </div>
        <div className="p">
            <p>I am a passionate front-end web developer with experience in creating responsive and user-friendly websites.</p>

        </div>
        <button id='btn' className="button">Contact Me</button>
        <div className="socialLink">
            <a href="https://www.facebook.com/profile.php?id=61578296423872" className="facebook" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.tiktok.com/@eng.ahmed.vortex?_r=1&_t=ZS-95BLm4bcUpF" className="tiktok" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://www.github.com" className="github" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        </div>

    </div>
  )
}

export default MainPart