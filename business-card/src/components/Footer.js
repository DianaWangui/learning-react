import React from 'react';
import Instagram from '../instagram.svg'
import Twitter from '../twitter.svg'
import Facebook from '../facebook.svg'
import Github from '../github.svg'

export default function Footer() {
  return (
    <div className="footer">
      <img className="img1" src={Instagram} alt="header image" />
      <img className="img2" src={Twitter} alt="header image" />
      <img className="img3" src={Facebook} alt="header image" />
      <img className="img4" src={Github} alt="header image" />
    </div>
  )
}