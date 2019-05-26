import React, { useRef, useState, useEffect } from "react"
import "./Navigation.scss"

function Header() {
  const node = useRef()
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleOutsideClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      toggleNavbar(!isNavbarVisible)
    }
  }, [])

  const handleOutsideClick = e => {
    if (!node.current.contains(e.target)) {
      const navbar = document.getElementById("nav-mobile")
      navbar.classList.remove("tap")
    }
  }

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
      <a id="nav-button__open" onClick={() => toggleNavbar(!isNavbarVisible)}>
        <svg
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3H26M0 13.5263H15.2M0 24.8947H26"
            stroke="#F7F7F7"
            strokeWidth="5"
          />
        </svg>
      </a>
      <nav id="nav-mobile" ref={node}>
        <a
          id="nav-button__close"
          onClick={() => toggleNavbar(!isNavbarVisible)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15.141L11.7638 8.98425L17.9137 2.77275L15.141 0L8.982 6.2385L2.7495 0.08625L0 2.83575L6.24075 9.01575L0.08625 15.2505L2.83575 18L9.0135 11.7615L15.2272 17.9137L18 15.141Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://blog.jibin.tech">Blog</a>
        <a href="#about">About Me</a>
        <a href="#work">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <nav id="nav-desktop">
        <a href="https://blog.jibin.tech">Blog</a>
        <a href="#about">About Me</a>
        <a href="#work">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </>
  )
}

export default Header
