import React from "react"

import LandingScreen from "../components/LandingScreen"
import Container from "../components/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Jibin Thomas | Front-End Developer and Casual Blogger" />
    <LandingScreen />
    <Container />
  </Layout>
)

export default IndexPage
