import React from 'react'
import './WorksNavCss.css'

function Card({classe,title,number}){
  return(
    <>
    <div  className={classe} >
        <span>{title}</span>
        <h1>{number}</h1>
    </div>
    </>
  )
}

function WorksNav() {
  return (
    <div className="WorksNav">
      <Card classe="card1 card" title="Projects" number="10+" />
      <Card classe="card2 card" title="Clients" number="200+" />
      <Card classe="card3 card" title="Experience" number="3+" />
    </div>
  )
}

export default WorksNav
