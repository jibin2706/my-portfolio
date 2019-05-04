import React, { Component } from "react"
import Scroller from "./Scroller"

export default class Main extends Component {
  state = {
    role: ["Web Developer", "Blogger", "Designer", "Android Developer"],
  }

  render() {
    return (
      <>
        <main id="main">
          <div id="first-name">
            <h2 style={{ display: "inline", fontSize: "80px" }}>Jibin</h2>
          </div>
          <div id="last-name">
            <h2 style={{ display: "inline", fontSize: "80px" }}>Thomas</h2>
          </div>
        </main>
        <div className="scroller-container">
          <Scroller items={this.state.role} />
        </div>
      </>
    )
  }
}
