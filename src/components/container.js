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
            things better. After graduating from the University of Mumbai, I've
            been actively involved in web design and android app development.
            I've designed websites for colleges, nonprofits and more. I also
            have a projects blog with all the information of the projects i was
            involved in. My specialty is front-end web design and development,
            making pixel magic in XD and turning it into beautiful, semantic
            HTML & CSS. My interests, however, extend beyond the web and i love
            developing android applications. When I'm not designing, I'm
            probably
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
          <div className="project-container">
            <Project title="Park Finder" description="blah blah" />
            <Project title="" description="" />
            <Project title="" description="" />
            <Project title="" description="" />
          </div>
        </section>

        <section id="contact">
          <TitleHeading title="Contact" />
          <div>
            <p className="info">
              Feel free to reach out if you have any queries. Also available for
              freelance work.
              <button className="email-button">Email Me</button>
            </p>
          </div>
        </section>
      </div>
    )
  }
}
