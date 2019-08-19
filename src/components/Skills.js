import React from "react"
import Heading from "./Heading"
import Tooltip from "./Tootlip"
import "./skills.scss"

import css from "../images/skills/css-3.svg"
import git from "../images/skills/git.svg"
import jquery from "../images/skills/jquery.svg"
import react from "../images/skills/react.svg"
import sass from "../images/skills/sass.svg"
import html from "../images/skills/html-5.svg"
import javascript from "../images/skills/javascript.svg"
import java from "../images/skills/java.svg"
import python from "../images/skills/python.svg"
import figma from "../images/skills/figma.svg"

function Skill() {
  return (
    <section id="skills" className="skills">
      <Heading title="Skills" />
      <div className="skills__list">
        <Tooltip text="HTML" img={html} />
        <Tooltip text="CSS" img={css} />
        <Tooltip text="JavaScript" img={javascript} />
        <Tooltip text="React" img={react} />
        <Tooltip text="SASS" img={sass} />
        <Tooltip text="Git" img={git} />
        <Tooltip text="Python" img={python} />
        <Tooltip text="Java" img={java} />
        <Tooltip text="jQuery" img={jquery} />
        <Tooltip text="Figma" img={figma} />
      </div>
    </section>
  )
}

export default Skill
