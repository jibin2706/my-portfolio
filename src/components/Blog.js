import React from "react"
import Heading from "./Heading"

import "./blog.scss"

function Blog() {
  return (
    <section id="blog">
      <Heading title="Latest Posts" />
      <div className="blog__container">
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
  )
}

export default Blog
