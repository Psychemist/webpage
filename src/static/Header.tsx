import React from 'react'
import '../css/Header.css'

export default function Header() {
  return (
    <div className="header">
      <img src={require('../assets/logo.png')} alt="abo logo" />
      <div className="font-setter-wrapper">
        <span>繁</span> / <span>簡</span> / <span>ENG</span> | <span>A</span> | <span>A</span> | <span>A</span>
      </div>
    </div>
  )
}
