import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Scroller.scss"

export default class Scroller extends Component {
  componentDidMount() {
    setInterval(() => {
      let scrollerParent = document.getElementById("scroller")
      let scrollerElements = scrollerParent.children
      scrollerParent.appendChild(scrollerElements[0])
    }, 2000)
  }
  render() {
    return (
      <>
        <div id="scroller">
          {this.props.items.map((item, index) => (
            <h3 className="scroller-items" key={index}>
              {item}
            </h3>
          ))}
        </div>
      </>
    )
  }
}

Scroller.propTypes = {
  items: PropTypes.array.isRequired,
}
