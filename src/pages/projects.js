import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"

import "../styles/projects.scss"
import "../styles/style.scss"

const Projects = () => (
  <div>
    <SEO
      title="Jibin Thomas — Front-End Developer and Casual Blogger"
      description="Projects developed by Jibin Thomas with source code and project links."
    />

    <div className="back-button">
      <Link to="/">
        <svg
          id="back1"
          width="30"
          height="30"
          fill="#ffffff"
          viewBox="0 0 459 459"
        >
          <path
            d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z"
            id="reply"
          />
        </svg>
      </Link>
    </div>

    <header className="projects__header">
      <h1>Projects</h1>
    </header>

    <main className="projects__container">
      <ProjectCard
        name="Personal Blog"
        description="Designed and developed my personal blog using Gatsby.js and SCSS for styling. It is a PWA and scores high on lighthouse."
        projectUrl="https://blog.jibin.tech"
        sourceUrl="https://github.com/jibin2706/blog.jibin.tech"
      />
      <ProjectCard
        name="Portfolio Site"
        description="Designed and developed my portfolio site using Gatsby.js and used SCSS for styling."
        projectUrl="https://jibin.tech"
        sourceUrl="https://github.com/jibin2706/my-portfolio"
      />
      <ProjectCard
        name="Backslash Fest"
        description="Website made for IT fest of Wilson College. Used HTML5,CSS, jQuery for builting it and hosted on Github pages."
        projectUrl="https://backslashfest.org"
      />
      <ProjectCard
        name="cidr.xyz"
        description="Upgraded the projects dependencies and made the necessary changes."
        projectUrl="https://cidr.xyz/"
        sourceUrl="https://github.com/yuvadm/cidr.xyz"
      />
      <ProjectCard
        name="Quote Generator"
        description="Simple quote generator made using React.js. Fetched quotes data from an json api and used them in react component."
        projectUrl="https://quote-gen.netlify.com/"
        sourceUrl="https://github.com/jibin2706/random-quote-machine"
      />
      <ProjectCard
        name="React Calculator"
        description="Calculator made using React.js"
        projectUrl="https://jibin2706.github.io/react-calculator/"
        sourceUrl="https://github.com/jibin2706/react-calculator"
      />
      <ProjectCard
        name="Student Result Management System"
        description="A simple management system with CRUD operation, developed using PHP"
        sourceUrl="https://github.com/jibin2706/student-result-management-system"
      />
      <ProjectCard
        name="Pixel Art Maker"
        description="Draw pixel designs on the page. Developed using jQuery."
        projectUrl="https://jibin2706.github.io/Pixel-Art-Maker/"
        sourceUrl="https://github.com/jibin2706/student-result-management-system"
      />
    </main>
  </div>
)

function ProjectCard({ name, description, sourceUrl, projectUrl }) {
  return (
    <div className="project-card">
      <h2 className="project-card__header">{name}</h2>
      <span>{description}</span>
      <div className="project-card__link">
        {sourceUrl && <a href={sourceUrl}>Source code</a>}
        {projectUrl && <a href={projectUrl}>Live Project</a>}
      </div>
    </div>
  )
}

export default Projects
