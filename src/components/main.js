import React, { Component } from "react"
import Scroller from "./Scroller"

export default class Main extends Component {
  state = {
    role: ["Web Developer", "Blogger", "Designer"],
  }

  render() {
    return (
      <>
        <main id="main">
          <div id="first-name">
            <h2 className="name">JIBIN</h2>
          </div>
          <div id="last-name">
            <h2 className="name">THOMAS</h2>
          </div>
        </main>
        <div className="scroller-container">
          <Scroller items={this.state.role} />
        </div>
      </>
    )
  }
}
