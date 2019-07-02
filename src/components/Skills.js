import React from "react"
import Heading from "./Heading"
import "./skills.scss"

import css from "../images/skills/css-3.svg"
import git from "../images/skills/git.svg"
import jquery from "../images/skills/jquery.svg"
import react from "../images/skills/react.svg"
import sass from "../images/skills/sass.svg"
import html from "../images/skills/html-5.svg"
import javascript from "../images/skills/javascript.svg"
import vscode from "../images/skills/visual-studio-code.svg"
import bootstrap from "../images/skills/bootstrap.svg"
import java from "../images/skills/java.svg"
import python from "../images/skills/python.svg"
import figma from "../images/skills/figma.svg"

function Skill() {
  return (
    <section id="skills" className="skills">
      <Heading title="Skills" />
      <div className="skills__list">
        <img className="skills__list__img" alt="html" src={html} />
        <img className="skills__list__img" alt="css" src={css} />
        <img className="skills__list__img" alt="javascript" src={javascript} />
        <img className="skills__list__img" alt="react" src={react} />
        <img className="skills__list__img" alt="sass" src={sass} />
        <img className="skills__list__img" alt="git" src={git} />
        <img className="skills__list__img" alt="bootstrap" src={bootstrap} />
        <img className="skills__list__img" alt="python" src={python} />
        <img className="skills__list__img" alt="java" src={java} />
        <img className="skills__list__img" alt="jquery" src={jquery} />
        <img className="skills__list__img" alt="vscode" src={vscode} />
        <img className="skills__list__img" alt="figma" src={figma} />
      </div>
    </section>
  )
}

export default Skill
