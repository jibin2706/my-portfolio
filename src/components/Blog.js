import React from "react"
import Heading from "./Heading"

import "./blog.scss"

function Blog() {
  return (
    <section className="blog" id="blog">
      <Heading title="Latest Posts" />
      <div className="blog__container">
        <PostTemplate
          title="Using locally hosted fonts on your website"
          url="https://blog.jibin.tech/hosting-font-locally-for-your-website/"
          date="7th July, 2019"
        />

        <PostTemplate
          title="Nifty Javascript methods that will make your life easier"
          url="https://blog.jibin.tech/nifty-javascript-methods-that-will-make-your-life-easier/"
          date="2nd July, 2019"
        />

        <PostTemplate
          title="Visual Studio Code extensions to make you more productive"
          url="https://blog.jibin.tech/vs-code-extensions-to-make-you-more-productive/"
          date="5th June, 2019"
        />

        <PostTemplate
          title="Integrating payment in your Android Application"
          url="https://blog.jibin.tech/integrating-payment-in-android-app/"
          date="17th May, 2019"
        />

        <PostTemplate
          title="How to get started with IoT using NodeMCU Devkit and Firebase database"
          url="https://blog.jibin.tech/connecting-nodemcu-to-firebase/"
          date="25th April, 2019"
        />

        <p className="post">
          To read{" "}
          <a className="link" href="https://blog.jibin.tech">
            more such post
          </a>
        </p>
      </div>
    </section>
  )
}

function PostTemplate({ title, url, date }) {
  return (
    <p className="post">
      <a href={url} className="link">
        {title}
      </a>
      <span className="date"> {date}</span>
    </p>
  )
}

export default Blog
