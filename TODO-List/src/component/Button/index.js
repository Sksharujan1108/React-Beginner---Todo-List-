import React from 'react'
import './button.css'

const MainButton = (props) => {
    const {
        onClick,  // Function to be called when the button
        title,
    } = props
  return (
    <div className="main-button">
      <button 
        className="btn-txt"
        onClick = {onClick}
      >  <span> {title} </span> </button>
    </div>
  )
}

export default MainButton
