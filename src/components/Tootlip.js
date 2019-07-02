import React from "react"
import "./tooltip.scss"

function Tootlip({ img, text }) {
  return (
    <div className="tooltip">
      <img className="skills__list__img" src={img} alt={text} />
      {/* <div className="tooltip__text">{text}</div> */}
    </div>
  )
}

export default Tootlip
