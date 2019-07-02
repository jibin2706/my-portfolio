import React from "react"
import Heading from "./Heading"

import "./about.scss"

function About() {
  return (
    <section id="about">
      <Heading title="About Me" />
      <div className="about__info">
        <p>
          I'm a Frontend Web developer, graduated from Mumbai University in a
          Bachelor of Science in Information Technology. I've been actively
          involved in web design and android app development. And I have
          recently started blogging related to programming.
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
