import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content">
        <main className="footer-main-content">
          <div className="footer-content1">
            <header className="footer-main">
              <div className="footer-header">
                <img
                  alt={props.Branding_alt}
                  src={props.Branding_src}
                  className="footer-branding"
                />
                <span className="footer-text">{props.Text}</span>
              </div>
              <div className="footer-socials">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon cursor_pointer"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    className=""
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon2 cursor_pointer"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                    className=""
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon4 cursor_pointer"
                >
                  <path
                    d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"
                    className=""
                  ></path>
                </svg>
              </div>
            </header>
            <header className="footer-categories">
              <div className="footer-category">
                <div className="footer-header1">
                  <span className="footer-text01 footer-header">
                    {props.Text2}
                  </span>
                </div>
                <div className="footer-links">
                  <Link
                    to="/about-us"
                    className="footer-text02 HeaderOnHoverTextColorful cursor_pointer footer-link"
                  >
                    <span className="">About Us</span>
                    <br className=""></br>
                  </Link>
                  <Link
                    to="/outstaffing"
                    className="footer-text05 HeaderOnHoverTextColorful cursor_pointer footer-link"
                  >
                    {props.Text3}
                  </Link>
                  <Link
                    to="/game-development"
                    className="footer-text06 HeaderOnHoverTextColorful cursor_pointer footer-link"
                  >
                    {props.Text4}
                  </Link>
                  <Link
                    to="/virtural-game"
                    className="footer-text07 HeaderOnHoverTextColorful cursor_pointer footer-link"
                  >
                    {props.Text5}
                  </Link>
                  <Link
                    to="/game-art"
                    className="footer-text08 HeaderOnHoverTextColorful cursor_pointer footer-link"
                  >
                    <span className="">Game Art</span>
                    <br className=""></br>
                  </Link>
                  <span className="footer-text11 HeaderOnHoverTextColorful cursor_pointer footer-link">
                    <span className="">Contact Us</span>
                    <br className=""></br>
                  </span>
                </div>
              </div>
            </header>
          </div>
          <section className="footer-copyright">
            {/* <span className="footer-text14">{props.text1}</span> */}
            <span className="footer-text14">© {year} WMGamingstudioz. All Rights Reserved.</span>
          </section>
        </main>
        <main className="footer-subscribe">
          <main className="footer-main1">
            <h1 className="footer-heading">{props.Heading}</h1>
            <div className="footer-input-field">
              <input
                type="email"
                placeholder={props.textinput_placeholder}
                className="footer-textinput input"
              />
              <div className="footer-buy button">
                <span className="footer-text15">{props.Text1}</span>
                <span className="footer-text16">
                  <span className="">Subscribe now</span>
                  <br className=""></br>
                </span>
              </div>
            </div>
          </main>
          <h1 className="footer-notice">{props.Notice}</h1>
        </main>
        <section className="footer-copyright1">
          {/* <span className="footer-text19">{props.text}</span> */}
          <span className="footer-text19">© {year} WMGamingstudioz. All Rights Reserved.</span>
        </section>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  Text2: 'ALL SERVICES\n',
  Text4: 'Game Development\n',
  Text3: 'Outstaffing\n',
  Text5: 'Virtural Game\n',
  text1: '© 2023 WMGamingstudioz. All Rights Reserved.',
  Text: 'We are one of the fastest growing game development companies supporting multiplatform games across the vast expanse of Mobile, PC, Web and Console gaming.',
  text: '© 2023 WMGamingStudioz. All Rights Reserved.',
  Branding_src: 'https://iili.io/H7Xi0iB.png',
  Notice:
    'By subscribing to our newsletter you agree with our Terms and Conditions.',
  rootClassName: '',
  Text1: '->',
  Branding_alt: 'image',
  textinput_placeholder: 'Enter your email',
  Heading: 'Subscribe to our newsletter',
}

Footer.propTypes = {
  Text2: PropTypes.string,
  Text4: PropTypes.string,
  Text3: PropTypes.string,
  Text5: PropTypes.string,
  text1: PropTypes.string,
  Text: PropTypes.string,
  text: PropTypes.string,
  Branding_src: PropTypes.string,
  Notice: PropTypes.string,
  rootClassName: PropTypes.string,
  Text1: PropTypes.string,
  Branding_alt: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  Heading: PropTypes.string,
}

export default Footer
