import React from 'react'
import profilePic from './assets/me.jpg'

function Card() {
  return (
    <div className="card">
        <img className='card-image' src={profilePic} alt='fota de mim'></img>
        <h2 className='card-title'>Victor</h2>
        <p className='card-text'>Full Stack Development</p>
    </div>
  )
}

export default Card