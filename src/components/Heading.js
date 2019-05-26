import React from "react"
import Line from "./Line"

function Heading({ title }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "16px" }}>
      <Line />
      <h3 className="title-heading" style={{ display: "inline", margin: 0 }}>
        {title}
      </h3>
      <Line />
    </div>
  )
}

export default Heading
