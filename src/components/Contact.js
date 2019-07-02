import React from "react"
import Heading from "./Heading"

import "./contact.scss"

function Contact() {
  return (
    <section id="contact">
      <Heading title="Contact" />
      <div className="contact__container">
        <p>
          Feel free to reach out if you have any queries or want to discuss any
          projects. I will try to reach out as soon as possible.
        </p>
        <p>
          And I'm also available for freelance work. Here's my{" "}
          <a
            className="link"
            href="https://drive.google.com/file/d/1FFSLL4uIRzEh5KsJYGSq8e_6X3XL5BxL/view?usp=sharing"
            type="application/pdf"
          >
            resume
          </a>
        </p>
        <div className="center">
          <a
            href="mailto:jibin.thomas2706@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
