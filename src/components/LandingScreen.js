import React, { Component } from "react"
import Typist from "react-typist"

import "./LandingScreen.scss"
import "../styles/typist.css"

export default class Main extends Component {
  state = {
    roles: ["Blogger", "Designer", "Web Developer"],
  }

  render() {
    return (
      <>
        <main>
          <h1 id="name">
            <span className="first-name">Jibin</span>
            <span className="last-name">Thomas</span>
          </h1>
          <h2 id="role">
            <span style={{ color: "#A0B3C5" }}>I'm a </span>
            <Typist startDelay={1000} avgTypingDelay={100}>
              {this.state.roles[0]}
              <Typist.Backspace
                count={this.state.roles[0].length}
                delay={1000}
              />
              {this.state.roles[1]}
              <Typist.Backspace
                count={this.state.roles[1].length}
                delay={1000}
              />
              {this.state.roles[2]}
            </Typist>
          </h2>
        </main>
      </>
    )
  }
}
