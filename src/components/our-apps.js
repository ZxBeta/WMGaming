import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './our-apps.css'

const OurApps = (props) => {
  const [showStrawCon, setShowStrawCon] = useState(false)
  const [showColorCon, setShowColorCon] = useState(false)
  const [showLudoCon, setShowLudoCon] = useState(false)
  return (
    <div className={`our-apps-container ${props.rootClassName} `}>
      <div className="our-apps-container01">
        <header className="our-apps-header">
          <header className="our-apps-left">
            <h2 className="our-apps-heading colortexter">
              {props.Our_Recent_Work}
            </h2>
          </header>
        </header>
        <div className="our-apps-container02">
          <div className="our-apps-app-circle">
            <div className="our-apps-gradient">
              <img
                alt={props.image_alt}
                src={props.image_src}
                onClick={() => setShowLudoCon(true)}
                className="our-apps-image"
              />
            </div>
          </div>
          <div className="our-apps-app-circle1">
            <div className="our-apps-gradient1">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                onClick={() => setShowStrawCon(true)}
                className="our-apps-image01"
              />
            </div>
          </div>
          <div className="our-apps-app-circle2">
            <div className="our-apps-gradient2">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                onClick={() => setShowColorCon(true)}
                className="our-apps-image02"
              />
            </div>
          </div>
        </div>
        {showLudoCon && (
          <div className="our-apps-pop-up-ludo">
            <div
              onClick={() => setShowLudoCon(false)}
              className="our-apps-close-button"
            >
              <svg viewBox="0 0 1024 1024" className="our-apps-icon">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="our-apps-container03">
              <div className="our-apps-container04">
                <h2 className="our-apps-text colortexter H2">LUDO KNIGHT</h2>
                <span className="our-apps-text1">
                  {' '}
                  A difficult-to-get-bored game, Ludo Knight is super easy to
                  understand. This game can be played by 2 to 4 players and if
                  you are not with your friend, you can play it against
                  computer. You will be allotted 4 tokens that have to complete
                  a full circle of the Ludo board before crossing the finishing
                  line. Cherry on the cake is that you do not necessarily need
                  to stay connected via internet.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="our-apps-download-now">
                  <span className="our-apps-text2">Download Now:</span>
                  <div className="our-apps-container05">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.fewargs.ludo"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="our-apps-link"
                    >
                      <img
                        alt={props.image_alt3}
                        src={props.image_src3}
                        className="our-apps-image03"
                      />
                    </a>
                    <img
                      alt={props.image_alt31}
                      src={props.image_src31}
                      className="our-apps-image04"
                    />
                  </div>
                </div>
              </div>
              <div className="our-apps-container06">
                <div className="our-apps-background">
                  <div className="our-apps-gradient3">
                    <img
                      alt={props.image_alt4}
                      src={props.image_src4}
                      className="our-apps-image05"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showStrawCon && (
          <div className="our-apps-pop-up-ludo1">
            <div
              onClick={() => setShowStrawCon(false)}
              className="our-apps-close-button1"
            >
              <svg viewBox="0 0 1024 1024" className="our-apps-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="our-apps-container07">
              <div className="our-apps-container08">
                <h2 className="our-apps-text3 H2 colortexter">
                  STRAWBERRY HIT
                </h2>
                <span className="our-apps-text4">
                  {' '}
                  Your experience with ‘Strawberry Hit’game app is going to
                  beunbeaten and wonderful. Be hero of this game in ultimate
                  knife challenge to slaughterStrawberries by throwing knife and
                  keep scoring with every hit. You will get a set of knives to
                  hit strawberries at every level. This application is amazing
                  match for fun time pass.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="our-apps-download-now1">
                  <span className="our-apps-text5">Download Now:</span>
                  <div className="our-apps-container09">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.strawberryhit.com&amp;hl=en_IN&amp;gl=US"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="our-apps-link1"
                    >
                      <img
                        alt={props.image_alt32}
                        src={props.image_src32}
                        className="our-apps-image06"
                      />
                    </a>
                    <img
                      alt={props.image_alt311}
                      src={props.image_src311}
                      className="our-apps-image07"
                    />
                  </div>
                </div>
              </div>
              <div className="our-apps-container10">
                <div className="our-apps-background1">
                  <div className="our-apps-gradient4">
                    <img
                      alt={props.image_alt41}
                      src={props.image_src41}
                      className="our-apps-image08"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showColorCon && (
          <div className="our-apps-pop-up-ludo2">
            <div
              onClick={() => setShowColorCon(false)}
              className="our-apps-close-button2"
            >
              <svg viewBox="0 0 1024 1024" className="our-apps-icon4">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="our-apps-container11">
              <div className="our-apps-container12">
                <h2 className="our-apps-text6 H2 colortexter">
                  CROSS COLOR VALLEY
                </h2>
                <span className="our-apps-text7">
                  {' '}
                  Turn on your concentration for the extremely fast and
                  addictive Cross Color Valley game. It’s easy to play, hit into
                  an obstacle with the same color pattern ball to cross it and
                  collect stars. Match ball color with circle, square or dots
                  coming from the top. Download now to play the single tap game
                  with amusing background music and endless fun.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="our-apps-download-now2">
                  <span className="our-apps-text8">Download Now:</span>
                  <div className="our-apps-container13">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.skycap.colorvalley"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="our-apps-link2"
                    >
                      <img
                        alt={props.image_alt321}
                        src={props.image_src321}
                        className="our-apps-image09"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-apps-container14">
                <div className="our-apps-background2">
                  <div className="our-apps-gradient5">
                    <img
                      alt={props.image_alt411}
                      src={props.image_src411}
                      className="our-apps-image10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

OurApps.defaultProps = {
  image_alt311: 'image',
  rootClassName: '',
  Our_Recent_Work: 'Our Recent Work',
  image_alt4: 'image',
  image_alt32: 'image',
  image_src311: '/playground_assets/apple%20store%20png%20200x56-200h.png',
  image_src3:
    '/playground_assets/google_play_store_badge_en%20200x56.svg-200h.png',
  image_src31: '/playground_assets/apple%20store%20png%20200x56-200h.png',
  heading: 'Heading',
  text: 'Text',
  image_alt41: 'image',
  image_src4: '/playground_assets/ludo-400h.png',
  image_src2: '/playground_assets/straw-400h.png',
  image_alt31: 'image',
  image_alt3: 'image',
  image_src: '/playground_assets/ludo-400h.png',
  image_alt1: 'image',
  image_src32:
    '/playground_assets/google_play_store_badge_en%20200x56.svg-200h.png',
  image_src1: '/playground_assets/qw-400h.png',
  image_src321:
    '/playground_assets/google_play_store_badge_en%20200x56.svg-200h.png',
  image_alt411: 'image',
  text1: 'Text',
  image_alt2: 'image',
  image_alt: 'image',
  image_src411: '/playground_assets/qw-400h.png',
  image_src41: '/playground_assets/straw-400h.png',
  image_alt321: 'image',
}

OurApps.propTypes = {
  image_alt311: PropTypes.string,
  rootClassName: PropTypes.string,
  Our_Recent_Work: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt32: PropTypes.string,
  image_src311: PropTypes.string,
  image_src3: PropTypes.string,
  image_src31: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  image_alt41: PropTypes.string,
  image_src4: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt31: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src32: PropTypes.string,
  image_src1: PropTypes.string,
  image_src321: PropTypes.string,
  image_alt411: PropTypes.string,
  text1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src411: PropTypes.string,
  image_src41: PropTypes.string,
  image_alt321: PropTypes.string,
}

export default OurApps
