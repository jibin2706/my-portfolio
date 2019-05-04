import React from "react"

import Main from "../components/main"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.scss"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Jibin Thomas"
      keywords={[`Jibin Thomas`, `Portfolio`, `Front-End Web Developer`]}
    />
    <Main />
    <Container />
  </Layout>
)

export default IndexPage
