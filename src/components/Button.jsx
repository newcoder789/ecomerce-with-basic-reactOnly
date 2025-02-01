import React from 'react'
import './button.css';
const Button = ({onClickHandler, value, title}) => {
  return (
    <div>
        <button onClick={onClickHandler} value={value} className='btns'>{title}</button>
    </div>
  )
}

export default Button