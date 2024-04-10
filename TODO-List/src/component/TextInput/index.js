import React from 'react'
import './input.css'

const TextInputField = (props) => {
    const {
        value,
        onChange,
        placeholder,
        type,
    } = props;

  return (
    <div className="text-input">
      <input
        type = {type}
        className = "input-txt"
        placeholder = {placeholder}
        value = {value}
        onChange = {onChange}
      />
    </div>
  )
}

export default TextInputField
