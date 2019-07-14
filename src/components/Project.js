import React from "react"
import { Link } from "gatsby"
import Heading from "../components/Heading"

import "./project.scss"

import backslash from "../images/project/backslash.png"
import backslashWebp from "../images/project/backslash.webp"
import randomquote from "../images/project/randomquote.png"
import randomquoteWebp from "../images/project/randomquote.webp"
import phone from "../images/project/parkfinder.png"
import phoneWebp from "../images/project/parkfinder.webp"

function Project() {
  return (
    <section id="work">
      <Heading title="Work" />
      <div className="work__container">
        <div className="card">
          <div className="card__box">
            <h2>Backslash Fest Website</h2>
            <p className="card__text">
              Created a website for IT fest of Wilson College. Technology: CSS,
              jQuery
            </p>
            <a className="link" href="https://backslashfest.org">
              Visit Project
            </a>
          </div>
          <picture className="card__picture">
            <source srcset={backslashWebp} type="image/webp" />
            <source srcset={backslash} type="image/jpeg" />
            <img src={backslash} alt="backslash website" />
          </picture>
        </div>
        <div className="card">
          <div className="card__box">
            <h2>Park Finder</h2>
            <p className="card__text">
              IoT project to get find parking location on your android phone and
              an easy to use api to access parking location's info.
            </p>
          </div>
          <picture className="card__picture">
            <source srcset={phoneWebp} type="image/webp" />
            <source srcset={phone} type="image/jpeg" />
            <img
              src={phone}
              alt="park finder"
              style={{ zIndex: 1 }}
              className="card-picture--vertical"
            />
          </picture>
        </div>
        <div className="card">
          <div className="card__box">
            <h2>Random Quote Generator</h2>
            <p className="card__text">
              Generate random quotes made using React
            </p>
            <a className="link" href="https://quote-gen.netlify.com/">
              Visit Project
            </a>
          </div>
          <picture className="card__picture">
            <source srcset={randomquoteWebp} type="image/webp" />
            <source srcset={randomquote} type="image/jpeg" />
            <img src={randomquote} alt="random quote generator" />
          </picture>
        </div>
      </div>
      <div className="more__projects">
        <Link to="/projects" className="btn  btn--hover">
          More projects
        </Link>
      </div>
    </section>
  )
}

export default Project
