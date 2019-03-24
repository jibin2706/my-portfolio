import React from "react"

function Project({ title, description, url }) {
  return (
    <div
      className={"card " + (url ? "pointer" : "normal-pointer")}
      onClick={() => url && window.open(url)}
    >
      {console.log(url)}
      <div className="card-overlay">{description}</div>
      <h3>{title}</h3>
    </div>
  )
}

export default Project
