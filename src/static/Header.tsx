import React from 'react'
import '../css/Header.css'

export interface Props {
  addFontSize: any,
  resetFontSize: any,
  minusFontSize: any
}


export default function Header(props: Props) {
  return (
    <div className="header">
      <img src={require('../assets/logo.png')} alt="abo logo" className="abo-logo" />
      <div className="header-right-container">
        <div className="font-setter-wrapper">
          <span>繁</span> / <span>简</span> / <span>ENG</span> | <span className="minus-font-size-btn btn" onClick={props.minusFontSize}>A</span> | <span className="reset-font-size-btn btn" onClick={props.resetFontSize}>A</span> | <span className="add-font-size-btn btn" onClick={props.addFontSize}>A</span> |
        </div>
        <div className="circle"></div>
      </div>
    </div>
  )
}
