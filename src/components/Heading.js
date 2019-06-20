import React from "react"

import "./Heading.scss"

function Heading({ title }) {
  return (
    <div className="heading">
      <Line />
      <h3 className="heading__title">{title}</h3>
      <Line />
    </div>
  )
}

function Line() {
  return (
    <svg
      width="92"
      height="5"
      viewBox="0 0 107 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="line"
    >
      <rect width="107" height="5" rx="1.5" fill="#0b69a3" />
    </svg>
  )
}

export default Heading
