import React from "react"

import backslash from "../images/project/backslash.png"
import randomquote from "../images/project/randomquote.png"
import phone from "../images/project/parkfinder.png"

function Project() {
  return (
    <>
      <div className="project-container">
        <div className="card-container">
          <div className="card">
            <h2>Backslash Fest Website</h2>
            <p>
              Website for IT fest of Wilson College. Technology: HTML5, CSS,
              jQuery
            </p>
            <a className="card-link" href="https://backslashfest.org">
              Visit Project
            </a>
          </div>
          <img src={backslash} alt="backslash website" />
        </div>
        <div className="card-container">
          <div className="card">
            <h2>Park Finder</h2>
            <p>
              IoT project to get find parking location on your android phone and
              an easy to use api to access parking location's info.
            </p>
          </div>
          <img src={phone} alt="park finder" style={{ zIndex: 1 }} />
        </div>
        <div className="card-container">
          <div className="card">
            <h2>Random Quote Generator</h2>
            <p>Generate random quotes made using React</p>
            <a
              className="card-link"
              href="https://random-quote-generator-1.netlify.com/"
            >
              Visit Project
            </a>
          </div>
          <img src={randomquote} alt="random quote generator" />
        </div>
      </div>
    </>
  )
}

export default Project
