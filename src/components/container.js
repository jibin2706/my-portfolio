import React, { Component } from "react"
import TitleHeading from "./TitleHeading"
import List from "./List"
import Project from "./project"

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: ["Javascript", "Python", "Java"],
      tools: ["Git", "VSCode", "Figma", "Adobe XD"],
      frontEnd: ["React", "jQuery", "Bootstrap"],
    }
  }
  render() {
    return (
      <div className="wrapper">
        <section id="about">
          <TitleHeading title="About" />
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
          <TitleHeading title="Skills" />
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
          <TitleHeading title="Work" />
          <Project />
        </section>

        <section id="contact">
          <TitleHeading title="Contact" />
          <div>
            <p className="info">
              Feel free to reach out if you have any queries. I will try to
              reach out as soon as possible. Also available for freelance work.
            </p>
            <div style={{ textAlign: "center" }}>
              <a
                href="mailto:jibin.thomas2706@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email-button"
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
