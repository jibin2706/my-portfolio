import React from "react"

function SideNav() {
  return (
    <nav id="side-nav">
      <a href="https://jibin.tech" className="brand-name">
        Jibin Thomas
      </a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="blog.jibin.tech">Blog</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>

      <div className="social">{/* social media links */}</div>
    </nav>
  )
}

export default SideNav
