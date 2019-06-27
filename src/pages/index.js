import React from "react"

import LandingScreen from "../components/LandingScreen"
import Container from "../components/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import "../styles/style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Jibin Thomas | Front-End Developer and Casual Blogger" />
    <LandingScreen />
    <Container />
  </Layout>
)

export default IndexPage
