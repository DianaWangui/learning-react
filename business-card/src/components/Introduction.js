import React from 'react';
import LinkdIn from '../linkdin.png'
import Email from '../email.png'

export default function Introduction() {
  return (
    <div className="name-cls">
      <div className="intro-cls">
        <h2>Diana Wangui</h2>
        <h3>Frontend Developer</h3>
        <p>www.diana.tech</p>
      </div>

      <div className="intro-btn">
        <button className="btn-1">
          <img src={Email} alt="linkdin" width="20px"/>
            Email
        </button>
        <button className='btn-2'>
          <img src={LinkdIn} alt="linkdin" width="20px"/>
          LinkdIn</button>
      </div>
    </div>
  )
}