import React from "react"
import "./layout.css"

import Navigation from "./Navigation"

import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
)

export default Layout
