import React from "react"

import Header from "./header"

import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
