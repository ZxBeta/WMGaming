import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  const [show_contact_menu, setShow_contact_menu] = useState(false)
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <div className="header-container1">
        <Link to="/" className="header-navlink">
          <img
            alt={props.image_alt}
            src={props.WMLogo}
            className="header-image FadeInUp"
          />
        </Link>
        <div className="header-nav-container">
          <div className="header-nav FadeInUp">
            <Link
              to="/about-us"
              className="header-navlink01 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text}
            </Link>
            <Link
              to="/game-development"
              className="header-navlink02 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text1}
            </Link>
            <Link
              to="/game-art"
              className="header-navlink03 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text2}
            </Link>
            <Link
              to="/outstaffing"
              className="header-navlink04 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text3}
            </Link>
            <Link
              to="/virtural-game"
              className="header-navlink05 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text4}
            </Link>
            <span
              onClick={() => setShow_contact_menu(true)}
              className="header-text HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text5}
            </span>
          </div>
          <div className="header-menu-icon">
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle"
              >
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path
                    d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                    className=""
                  ></path>
                </svg>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list FadeInUp"
              >
                <Link to="/about-us" className="">
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle1"
                    >
                      <span className="header-text1 HeaderOnHoverTextColorful cursor_pointer">
                        About Us
                      </span>
                    </div>
                  </li>
                </Link>
                <Link to="/game-development" className="">
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle2"
                    >
                      <span className="header-text2 HeaderOnHoverTextColorful cursor_pointer">
                        Game Development
                      </span>
                    </div>
                  </li>
                </Link>
                <Link to="/game-art" className="">
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle3"
                    >
                      <span className="header-text3 HeaderOnHoverTextColorful cursor_pointer">
                        Game Art
                      </span>
                    </div>
                  </li>
                </Link>
                <Link to="/outstaffing" className="">
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle4"
                    >
                      <span className="header-text4 HeaderOnHoverTextColorful cursor_pointer">
                        Outstaffing
                      </span>
                    </div>
                  </li>
                </Link>
                <Link to="/virtural-game" className="">
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle5"
                    >
                      <span className="header-text5 HeaderOnHoverTextColorful cursor_pointer">
                        Virtural Game
                      </span>
                    </div>
                  </li>
                </Link>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown5 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle6"
                  >
                    <span className="header-text6 HeaderOnHoverTextColorful cursor_pointer">
                      Contact Us
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {show_contact_menu && (
        <div className="header-container2">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setShow_contact_menu(false)}
            className="header-close-icon"
          >
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              className=""
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

Header.defaultProps = {
  WMLogo: '/playground_assets/edited%20logo%20with%20text%20509%20x%20144.png',
  text2: 'Game Art',
  text4: 'Virtual Game',
  image_alt: 'HeaderLogo',
  text5: 'Contact Us',
  text: 'About Us',
  text1: 'Game Development',
  rootClassName: '',
  text3: 'Outstaffing',
}

Header.propTypes = {
  WMLogo: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  image_alt: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
}

export default Header
