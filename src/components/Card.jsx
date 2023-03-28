/*import React from 'react'
import '../styles/card.css'

const Card = ({title, subtitle, text, price, img}) => {
  return (
    <div className="card">
    <div className="card-img">
        <img src={img} alt={title} />
    </div>
    <div className="card-info">
      <p className="text-title">{title}</p>
      <p className="text-subtitle">{subtitle}</p>
      <p className="text-body">{text}</p>
    </div>
    <div className="card-footer">
    <span className="text-title">${price}</span>
  </div></div>
  )
}

export default Card
*/

import React from 'react'
import '../styles/card.css'
import '../styles/button.css'
import { ButtonRed } from './Button'
import { ButtonWhite } from './Button'
const Card = ({title, subtitle, text, price, img}) => {
  return (
    <div className="card">
    <div className="card-img">
        <img src={img} alt={title} />
    </div>
    <div className="card-info">
      <p className="text-title">{title}</p>
      <p className="text-subtitle">{subtitle}</p>
      <p className="text-body">{text}</p>
    </div>
    <div className="card-footer">
    <span className="text-title">${price}</span>
     <ButtonRed/>
     <ButtonWhite/>
  </div></div>
  )
}

export default Card