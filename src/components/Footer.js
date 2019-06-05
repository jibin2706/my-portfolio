import React from "react"

import "./footer.scss"

function Footer() {
  return (
    <footer>
      <hr style={{ maxWidth: "900px", margin: "16px auto" }} />
      <div className="social">
        <a href="https://twitter.com/real_jibin">Twitter</a>
        <a href="https://github.com/jibin2706">Github</a>
        <a href="https://www.linkedin.com/in/jibin-thomas-4b3496142/">
          Linkedin
        </a>
      </div>
      <div className="footer-info">
        <p>© - Coded by hand and headaches</p>
        <p>Powered by Gatsby.js</p>
      </div>
    </footer>
  )
}

export default Footer
