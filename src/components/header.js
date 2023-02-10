import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'
import './MobileNav/mobileNav.css'

const Header = (props) => {
  const [show_contact_menu, setShow_contact_menu] = useState(false)
  const [show_mobileNav, setShow_mobileNav] = useState(false)
  const [active, setActive] = useState(false)

  const trueToggler = () => {
    setShow_mobileNav(true);
    setActive(true);
  }

  const falseToggler = () => {
    setShow_mobileNav(false);
    setActive(false);
  }

  const contactToggler = () => {
    setShow_contact_menu(true)
    setShow_mobileNav(false)
  }
  return (
    <>
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
            <div className="header-menu-icon" onClick={trueToggler}>
              <svg xmlns="http://www.w3.org/2000/svg" fill='white' id="Outline" viewBox="0 0 24 24" width="100%" height="100%"><rect y="11" width="24" height="2" rx="1" /><rect y="4" width="24" height="2" rx="1" /><rect y="18" width="24" height="2" rx="1" /></svg>
            </div>
          </div>
        </div>
        {show_contact_menu && (
          <div className="header-container2 FadeInUp">
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
      {show_mobileNav && (<div className={active ? "mobile_navigation_menu fadeInRight" : "mobile_navigation_menu fadeInLeft"}>
        <div className='close_svg_wrapper' onClick={falseToggler}>
          <svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></div>
        <div className='actual_nav_mob'>
          <div className="mober-naver">
            <Link
              to="/about-us"
              className="header-mob-navlink01 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text}
            </Link>
            <Link
              to="/game-development"
              className="header-mob-navlink02 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text1}
            </Link>
            <Link
              to="/game-art"
              className="header-mob-navlink03 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text2}
            </Link>
            <Link
              to="/outstaffing"
              className="header-mob-navlink04 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text3}
            </Link>
            <Link
              to="/virtural-game"
              className="header-mob-navlink05 HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text4}
            </Link>
            <span
              onClick={contactToggler}
              className="header-mob-text HeaderOnHoverTextColorful cursor_pointer"
            >
              {props.text5}
            </span>
          </div>
        </div>
      </div>)}

    </>
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
