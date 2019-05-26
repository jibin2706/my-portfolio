import React from "react"

import LandingScreen from "../components/LandingScreen"
import Container from "../components/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.scss"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Jibin Thomas"
      keywords={[`Jibin Thomas`, `Portfolio`, `Front-End Web Developer`]}
    />
    <LandingScreen />
    <Container />
  </Layout>
)

export default IndexPage
