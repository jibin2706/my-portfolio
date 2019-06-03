import React, { useState, useEffect } from "react"
import "./Navigation.scss"

function Header() {
  const [isNavbarVisible, toggleNavbar] = useState(false)
  useEffect(() => {
    const navbar = document.getElementById("nav-mobile")
    const checkbox = document.getElementById("checkbox1")

    if (isNavbarVisible) {
      navbar.classList.add("tap")
      document.documentElement.classList.add("hide-overflow")
      checkbox.checked = true
    } else {
      navbar.classList.remove("tap")
      document.documentElement.classList.remove("hide-overflow")
      checkbox.checked = false
    }
  })

  return (
    <>
      <input
        type="checkbox"
        id="checkbox1"
        className="checkbox1 visuallyHidden"
      />
      <label
        htmlFor="checkbox1"
        id="hamburger"
        onClick={() => toggleNavbar(!isNavbarVisible)}
      >
        <div className="hamburger">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
          <span className="bar bar4" />
        </div>
      </label>

      <nav id="nav-mobile">
        <a
          onClick={() => toggleNavbar(!isNavbarVisible)}
          href="https://blog.jibin.tech"
        >
          BLOG
        </a>
        <a onClick={() => toggleNavbar(!isNavbarVisible)} href="#about">
          ABOUT
        </a>
        <a onClick={() => toggleNavbar(!isNavbarVisible)} href="#work">
          PORTFOLIO
        </a>
        <a onClick={() => toggleNavbar(!isNavbarVisible)} href="#contact">
          CONTACT
        </a>
      </nav>
      <nav id="nav-desktop">
        <a href="https://blog.jibin.tech">BLOG</a>
        <a href="#about">ABOUT</a>
        <a href="#work">PORTFOLIO</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </>
  )
}

export default Header
