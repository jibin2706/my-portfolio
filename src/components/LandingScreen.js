import React from "react"

import "./LandingScreen.scss"
import RoleType from "./RoleType"

function Main() {
  return (
    <>
      <main className="main">
        <h1>
          <span className="main__first--name">Jibin</span>
          <span className="main__last--name">Thomas</span>
          <div className="main__role">
            <span style={{ color: "#A0B3C5" }}>I'm a </span>
            <RoleType />
          </div>
        </h1>
      </main>
    </>
  )
}

export default Main
