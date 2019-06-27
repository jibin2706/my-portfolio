import React, { useState } from "react"
import Typist from "react-typist"

import "../styles/typist.css"

function RoleType() {
  const [roles] = useState(["Blogger", "Designer", "Web Developer"])

  return (
    <Typist startDelay={1000} avgTypingDelay={100}>
      {roles[0]}
      <Typist.Backspace count={roles[0].length} delay={1000} />
      {roles[1]}
      <Typist.Backspace count={roles[1].length} delay={1000} />
      {roles[2]}
    </Typist>
  )
}

export default RoleType
