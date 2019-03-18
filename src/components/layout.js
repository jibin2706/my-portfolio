import React from "react"

import Header from "./header"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
