import React from 'react'
import './SkillServices.css'
const card = {   
     style: {
        backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/5968/5968292.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100px',
        height: '100px',
        borderRadius: '10px',
        marginBottom: '10px',

    }
}

function SkillCard({title , nrl,customeWidth, customeHeight}){
    return(
        <div className="Skill-Card">
            <div className="SKcardImg" style={{...card.style, backgroundImage: `url(${nrl})`, width: customeWidth, height: customeHeight}}>

            </div>
            <h2>{title}</h2>
        </div>
    )
}
function ServiceCard({title , discription,icon}){
    return(
        <div className="Service-Card">
            <i className={icon}></i>
            <h2>{title}</h2>
            <p>{discription}</p>
        </div>
    )
}



function SkillServices() {
  return (
    <>
        <div className='Skills-Section' id='Skills-Section'>
        <h1>Technical Skills</h1>
        <div className="Skill-Cards">
            <SkillCard title="React" nrl="react.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="HTML5" nrl="html5.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="CSS3" nrl="css3.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="JavaScript" nrl="javascript.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="Git" nrl="git.png" customeHeight={"130px"} customeWidth={"90px"}/>
            <SkillCard title="Node.js" nrl="nodejs.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="Python" nrl="py.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="Computer Science" nrl="cs.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="Graphic Design" nrl="gd.png" customeHeight={"100px"} customeWidth={"100px"}/>
            <SkillCard title="Terminal" nrl="linux.png" customeHeight={"100px"} customeWidth={"100px"}/>
        </div>
        <div className="lightPat">
        </div>
        <div className="lightPatt">
        </div>
        <div className="lightPatSt">
        </div>
    </div>
    <BRFu />
    <br id='Services-Section'></br>
    <br></br>
    <Services />
    </>
  )
}
function BRFu(){
  return(
    <div className="BRFu">
        
    </div>
  )
}

function Services() {
  return (
    <>
    <div className='Skills-Section'>
        <h1>My Services</h1>
        <div className="Services-Cards">
            <ServiceCard title="Web Development" discription="Building responsive, high-performance web applications using React & Node.js." icon="fas fa-code"/>
            <ServiceCard title="UI/UX Design" discription="Crafting intuitive and aesthetically pleasing user interfaces." icon="fas fa-paint-brush"/>
            <ServiceCard title="Database Architecture" discription="Designing and implementing efficient database solutions." icon="fas fa-database"/>
            <ServiceCard title="Technical Support" discription="Providing timely and effective technical assistance." icon="fas fa-headset"/>   
            <ServiceCard title="API Integration" discription="Connecting web apps with third-party services and APIs." icon="fa-solid fa-plug"/>   
            <ServiceCard title="Mobile Development" discription="Creating responsive and high-performance mobile applications." icon="fa-solid fa-mobile-screen-button"/>   
            <ServiceCard title="Cyber Security" discription="Protecting digital assets from cyber threats." icon="fa-solid fa-shield-halved"/>   
            <ServiceCard title="SEO" discription="Optimizing websites for search engine visibility." icon="fa-solid fa-search"/>   
        </div>
    </div> 
    <div className="lightParr">
    </div>   
    <div className="lightParrr">
    </div>   
    <div className="lightParrrs">
    </div>   
    <BRFu />
    <BRFu />
    </>

  )
}

export default SkillServices
