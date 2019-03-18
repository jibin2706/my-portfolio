import React from "react"
import Line from "./Line"

function TitleHeading({ title }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "16px" }}>
      <Line />
      <h2 className="title-heading" style={{ display: "inline", margin: 0 }}>
        {title}
      </h2>
      <Line />
    </div>
  )
}

export default TitleHeading
