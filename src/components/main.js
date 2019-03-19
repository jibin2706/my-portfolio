import React, { Component } from "react"

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      role: ["Web Developer", "Blogger", "Designer", "Android Developer"],
      displayRole: "",
    }
  }

  componentDidMount() {
    var index = 0
    this.timer = setInterval(() => {
      this.setState({ displayRole: this.state.role[index] })
      index = (index + 1) % this.state.role.length
    }, 2000)
  }

  render() {
    return (
      <>
        <main id="main">
          <div id="first-name">
            <span>Jibin</span>
          </div>
          <div id="last-name">
            <span>Thomas</span>
          </div>
        </main>
        <div className="main-info">
          <h3>{this.state.displayRole}</h3>
        </div>
      </>
    )
  }
}
