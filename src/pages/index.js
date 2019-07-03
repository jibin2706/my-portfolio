import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import LandingScreen from "../components/LandingScreen"
import About from "../components/About"
import Skills from "../components/Skills"
import Project from "../components/Project"
import Blog from "../components/Blog"
import Contact from "../components/Contact"

import "../styles/style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Jibin Thomas — Front-End Developer and Casual Blogger" description="Jibin Thomas is a Front-End Web developer from Mumbai. You can reach out to him jibin.thomas2706@gmail and he is available of freelance work."/>
    <LandingScreen />
    <About />
    <Skills />
    <Project />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
