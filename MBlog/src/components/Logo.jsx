import React from 'react'
import mlogo from '../assets/Logo.png'


function Logo({className=''}) {
  return (
    <div>
      <img src={mlogo} className={`${className}`}></img>
    </div>
  )
}

export default Logo