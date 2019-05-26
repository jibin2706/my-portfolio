import React, { Component } from "react"
import Heading from "./Heading"
import List from "./List"
import Project from "./project"

export default class Container extends Component {
  state = {
    languages: ["Javascript", "Python", "Java"],
    tools: ["Git", "VSCode", "Figma"],
    frontEnd: ["React", "jQuery", "Bootstrap"],
  }

  render() {
    return (
      <div className="wrapper">
        <section id="about">
          <Heading title="About" />
          <p className="info">
            I'm obsessed with making things and even more obsessed with making
            things better. Currently graduating from the University of Mumbai in
            a Bachelor of Science in Information Technology, I've been actively
            involved in web design and android app development. I have started
            to casually blog topics related to programming. My specialty is in
            front-end web design and development, making pixel magic in Figma
            and turning it into beautiful, semantic HTML & CSS. My interests,
            however, extend beyond the web and I love developing android
            applications. When I'm not coding, I'm probably playing cricket,
            chess or reading some books.
          </p>
        </section>

        <section id="skills">
          <Heading title="Skills" />
          <div className="container">
            <div>
              <h3>Languages</h3>
              <List items={this.state.languages} />
            </div>
            <div>
              <h3>Front-End</h3>
              <List items={this.state.frontEnd} />
            </div>
            <div>
              <h3>Tools</h3>
              <List items={this.state.tools} />
            </div>
          </div>
        </section>

        <section id="work">
          <Heading title="Work" />
          <Project />
        </section>

        <section id="contact">
          <Heading title="Contact" />
          <div>
            <p className="info">
              Feel free to reach out if you have any queries. I will try to
              reach out as soon as possible. Also available for freelance work.
              <br />
              Here's my{" "}
              <a
                className="link"
                href="https://drive.google.com/file/d/1FFSLL4uIRzEh5KsJYGSq8e_6X3XL5BxL/view?usp=sharing"
                type="application/pdf"
              >
                resume
              </a>
            </p>
            <div style={{ textAlign: "center" }}>
              <a
                href="mailto:jibin.thomas2706@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
