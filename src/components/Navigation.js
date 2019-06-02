import React, { useRef, useState, useEffect } from "react"
import "./Navigation.scss"

function Header() {
  const [isNavbarVisible, toggleNavbar] = useState(false)
  useEffect(() => {
    const navbar = document.getElementById("nav-mobile")

    if (isNavbarVisible) {
      navbar.classList.add("tap")
    } else {
      navbar.classList.remove("tap")
    }
  })

  return (
    <>
      <input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden" />
      <label
        for="checkbox1"
        id="hamburger"
        onClick={() => toggleNavbar(!isNavbarVisible)}
      >
        <div class="hamburger">
          <span class="bar bar1" />
          <span class="bar bar2" />
          <span class="bar bar3" />
          <span class="bar bar4" />
        </div>
      </label>

      <nav id="nav-mobile">
        <a href="https://blog.jibin.tech">BLOG</a>
        <a href="#about">ABOUT</a>
        <a href="#work">PORTFOLIO</a>
        <a href="#contact">CONTACT</a>
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
