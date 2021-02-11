import React, { Component } from 'react';

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
                    Platform & Foundation{' '}
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
              <p className="copyright">Федоров Владислав</p>
              <a
                href="https://github.com/robophonic"
                rel="noreferrer"
                target="_blank"
                className="terms-link"
              >
                ссылка на github аккаунт
              </a>
              <a
                href="https://www.figma.com/file/biFld9Yt7dpWURZ2ul3dE0/Utopia-foundation-web-site?node-id=456%3A1721"
                rel="noreferrer"
                target="_blank"
                className="terms-link"
              >
                ссылка на оригинал дизайна
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
