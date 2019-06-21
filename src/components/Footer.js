import React from "react"

import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__network">
        <a href="https://github.com/jibin2706">Github</a>
        <a href="https://twitter.com/real_jibin">Twitter</a>
        <a href="https://www.linkedin.com/in/jibin2706/">LinkedIn</a>
      </section>

      <section>
        <p className="footer__copyright">Ⓒ - Coded by hand and headaches</p>
        <p class="footer__end">
          This site is built with <a href="https://gatsbyjs.org/">Gatsby.js </a>
          . The source code is hosted on{" "}
          <a href="https://github.com/jibin2706/my-portfolio">Github</a>.
        </p>
      </section>
    </footer>
  )
}

export default Footer
