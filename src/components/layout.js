import React from "react"
import "./layout.css"

import Header from "./header"

import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
