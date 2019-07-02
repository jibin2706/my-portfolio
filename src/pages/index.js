import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import LandingScreen from "../components/LandingScreen"
import Skills from "../components/Skills"
import Project from "../components/Project"
import Blog from "../components/Blog"
import Contact from "../components/Contact"

import "../styles/style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Jibin Thomas | Front-End Developer and Casual Blogger" />
    <LandingScreen />
    <Skills />
    <Project />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
