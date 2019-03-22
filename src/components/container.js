import React, { Component } from "react"
import TitleHeading from "./TitleHeading"
import List from "./List"
import Project from "./project"

import twitter from "../images/twitter.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"

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
          <div className="project-container">
            <Project
              title="Park Finder"
              description="IoT project to get find parking location on your android phone and an easy to use api to access parking location's info."
            />
            <Project
              title="Backslash Fest Website"
              description="Website for IT fest of Wilson College. Technology: HTML5, CSS, jQuery"
              url="https://backslashfest.org"
            />
            <Project
              title="Random Quote Generator"
              description="Generate random quotes made using React"
            />
            <Project
              title="Student Result Management System"
              description="System for managing results. Technology: HTML5, CSS, PHP"
            />
          </div>
        </section>

        <section id="contact">
          <TitleHeading title="Contact" />
          <div>
            <p className="info">
              Feel free to reach out if you have any queries. I will try to
              reach out as soon as possible. Also available for freelance work.
              <button className="email-button">Email Me</button>
              <div className="social">
                <a
                  href="https://github.com/jibin2706"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src={github} alt="github" />
                </a>
                <a
                  href="https://twitter.com/real_jibin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jibin-thomas-4b3496142/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src={linkedin} alt="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/jibin2706/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icon"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </div>
            </p>
          </div>
        </section>
      </div>
    )
  }
}
