import React from 'react'
import './Header.css'
function TimeYear({classe,year,descreption}){
  return(
    <>
    <div className={classe}>
      <h1>{year}</h1>
      <p>{descreption}</p>
    </div>
    </>
  )
}
function Spanss({heightss,leftt,leftt2,bgc}){
  return(
    <>
      <span className='spann2' style={{ top : heightss }}>
      </span>
      <span className='spann1' style={{ top : heightss,  left : leftt2 }}>
      </span>
      <span className="Shartaa" style={{ top : heightss , left : leftt , background : bgc }}></span>
    </>
  )
}
function Header() {
  return (
    <div id='about-section' className="about-section">
        <div className="headerAbout">
            <h1 className="header-title">About Me</h1>
        </div>
        <div className="FatherOfTimeLine">
            <div className="TimeLine">
              <div className="spans">
                <Spanss heightss="10%" leftt="-50%" leftt2="-150%" bgc="linear-gradient(to left, rgb(137, 107, 197), rgb(101, 43, 112))" />
                <Spanss heightss="50%" leftt="150%" leftt2="250%" bgc="linear-gradient(to right, rgb(137, 107, 197), rgb(101, 43, 112))" />
                <Spanss heightss="90%" leftt="-50%" leftt2="-150%" bgc="linear-gradient(to left, rgb(137, 107, 197), rgb(101, 43, 112))" />
              </div>

            </div>
            <div className="YearsDat">
              <TimeYear classe={"year1 time"} year={"2023"} descreption={"Started my coding journey with HTML & CSS. The very beginning."}/>
              <TimeYear classe={"year2 time"} year={"2024"} descreption={"Stepped into JavaScript & Frontend Logic. Mastered JS fundamentals and brought static pages to life. Proudly developed Arbahi V1, my first functional project."}/>
              <TimeYear classe={"year3 time"} year={"2025"} descreption={"Dedicated the year to advanced Problem Solving and mastering JavaScript deep concepts. By late 2025, I transitioned into the React ecosystem to build scalable and dynamic web applications."}/>
            </div>
        </div>
        <div className="lightParts"></div>
    </div>
  )
}

export default Header