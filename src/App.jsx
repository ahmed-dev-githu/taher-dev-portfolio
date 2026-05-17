import React from 'react'
import Header from './components/MainPart/Header'
import MainPart from './components/MainPart/MainPart'
import PicturePart from './components/MainPart/PicturePart'
import './App.css'
import WorksNav from './components/MainPart/WorksNav'
import AboutHeader from './components/About/Header'
import SkillServices from './components/About/SkillServices'
function BRFu(){
  return(
    <div className="BRFu">
        
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <MainPart />
      <PicturePart />
      <BRFu />
      <WorksNav />
      <br></br>
      <br id='about-br-section'></br>
      <br></br>
      <AboutHeader />
      <BRFu />
      <br id='Skill-Section'/>
      <br/>
      <br/>

      <SkillServices />
            <BRFu />
            <BRFu />

    </>
  )
}



export default App