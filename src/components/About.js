import React from "react"
import Heading from "./Heading"

import "./about.scss"

function About() {
  return (
    <section id="about">
      <Heading title="About Me" />
      <div className="about__info">
        <p>
          Currently, I'm working as a Frontend Web developer at{" "}
          <a href="https://thesouledstore.com">The Souled Store</a>. Graduated
          from Mumbai University in a Bachelor of Science in Information
          Technology.
        </p>
        <p>
          My specialty is in{" "}
          <strong>front-end web design and development</strong>, making designs
          in Figma and turning it into beautiful, semantic HTML & CSS. However,
          my interests extend beyond the web and I try to play about with new
          technologies. When I'm not coding, I'm probably playing cricket, chess
          or reading some books.
        </p>
      </div>
    </section>
  )
}

export default About
