import React from "react"

function Project({ title, description }) {
  return (
    <div className="card">
      <div className="card-overlay">{description}</div>
      <h3>{title}</h3>
    </div>
  )
}

export default Project
