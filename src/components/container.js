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
          <Heading title="About Me" />
          <div className="info">
            <p>
              I'm obsessed with making things and even more obsessed with making
              things better. Currently graduating from the University of Mumbai
              in a Bachelor of Science in Information Technology, I've been
              actively involved in web design and android app development. I
              have started to casually blog topics related to programming.
            </p>
            <p>
              My specialty is in{" "}
              <strong>front-end web design and development</strong> , making
              pixel magic in Figma and turning it into beautiful, semantic HTML
              & CSS. My interests, however, extend beyond the web and I love
              developing android applications. When I'm not coding, I'm probably
              playing cricket, chess or reading some books.
            </p>
          </div>
        </section>

        <section>
          <Heading title="Skills" />
          <div className="container info">
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

        <section>
          <Heading title="Latest Posts" />
          <div className="info">
            <p className="post">
              <a
                href="https://blog.jibin.tech/vs-code-extensions-to-make-you-more-productive/"
                className="link"
              >
                Visual Studio Code extensions to make you more productive
              </a>
              <span className="date"> 5th June, 2019</span>
            </p>
            <p className="post">
              <a
                href="https://blog.jibin.tech/integrating-payment-in-android-app/"
                className="link"
              >
                Integrating payment in your Android Application
              </a>
              <span className="date"> 17th May, 2019</span>
            </p>
            <p className="post">
              <a
                href="https://blog.jibin.tech/connecting-nodemcu-to-firebase/"
                className="link"
              >
                How to get started with IoT using NodeMCU Devkit and Firebase
                database
              </a>
              <span className="date"> 25th April, 2019</span>
            </p>
            <p className="post">
              Read more such{" "}
              <a className="link" href="https://blog.jibin.tech">
                posts here
              </a>
            </p>
          </div>
        </section>

        <section id="contact">
          <Heading title="Contact" />
          <div>
            <p className="info">
              Feel free to reach out if you have any queries or want to discuss
              any projects. I will try to reach out as soon as possible. Do
              follow me on twitter{" "}
              <a href="https://twitter.com/real_jibin">@real_jibin</a>
              <br />
              And I'm also available for freelance work. Here's my{" "}
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
