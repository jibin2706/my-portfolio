import React from "react"

import Main from "../components/main"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.scss"
import "../components/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Main />
    <Container />
  </Layout>
)

export default IndexPage
