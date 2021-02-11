import React, { Component } from 'react'

const copyright = 'Федоров Владислав'
const github_text = 'ссылка на github аккаунт'
const github_link = 'https://github.com/robophonic'
const design_link =
  'https://www.figma.com/file/biFld9Yt7dpWURZ2ul3dE0/Utopia-foundation-web-site?node-id=456%3A1721'
const design_text = 'ссылка на оригинал дизайна'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row justify-content-between">
            <div className="footer_menu">
              <ul className="nav">
                <li className="has_dropdown">
                  <a href="\#" rel="noreferrer" className="inactive">
                    Problem & Challenges
                  </a>
                  <ul>
                    <li>
                      <a href="\#" rel="noreferrer">
                        History
                      </a>
                    </li>
                    <li>
                      <a href="\#" rel="noreferrer">
                        Problem industry
                      </a>
                    </li>
                    <li>
                      <a href="\#" rel="noreferrer">
                        Challenge
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="\#" rel="noreferrer" className="inactive">
                    Platform & Foundation
                  </a>
                  <ul>
                    <li>
                      <a href="\#" rel="noreferrer">
                        Our Vision
                      </a>
                    </li>
                    <li>
                      <a href="\#" rel="noreferrer">
                        What Makes Us Different
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="\#" rel="noreferrer" className="inactive">
                    Token
                  </a>
                  <ul>
                    <li>
                      <a href="\#" rel="noreferrer">
                        UOP Token
                      </a>
                    </li>
                    <li>
                      <a href="\#" rel="noreferrer">
                        Token Economics
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="\#" rel="noreferrer">
                    OUR OPERATIONS
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_info order-first">
              <p className="copyright">{copyright}</p>
              <a
                href={github_link}
                rel="noreferrer"
                target="_blank"
                className="terms-link"
              >
                {github_text}
              </a>
              <a
                href={design_link}
                rel="noreferrer"
                target="_blank"
                className="terms-link"
              >
                {design_text}
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
