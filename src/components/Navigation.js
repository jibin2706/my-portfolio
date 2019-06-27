import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

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
        aria-labelledby="checkbox1"
        aria-label="toggle navigation"
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
        <a
          onClick={() => toggleNavbar(!isNavbarVisible)}
          href="https://drive.google.com/file/d/1FFSLL4uIRzEh5KsJYGSq8e_6X3XL5BxL/view?usp=sharing"
          type="application/pdf"
        >
          RESUME
        </a>
        <Link onClick={() => toggleNavbar(!isNavbarVisible)} to="/#work">
          PORTFOLIO
        </Link>
        <Link onClick={() => toggleNavbar(!isNavbarVisible)} to="/#contact">
          CONTACT
        </Link>
      </nav>
      <nav id="nav-desktop">
        <a href="https://blog.jibin.tech">BLOG</a>
        <a
          href="https://drive.google.com/file/d/1FFSLL4uIRzEh5KsJYGSq8e_6X3XL5BxL/view?usp=sharing"
          type="application/pdf"
        >
          RESUME
        </a>
        <Link to="/#work">PORTFOLIO</Link>
        <Link to="/#contact">CONTACT</Link>
      </nav>
    </>
  )
}

export default Header
