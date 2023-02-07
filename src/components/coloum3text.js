import React from 'react'

import PropTypes from 'prop-types'

import './coloum3text.css'

const Coloum3text = (props) => {
  return (
    <section className={`coloum3text-container ${props.rootClassName} `}>
      <div className="coloum3text-container1">
        <span className="coloum3text-text">
          <span>Customized Full-Cycle</span>
          <br className="coloum3text-text02"></br>
          <span>Game Development</span>
        </span>
        <span className="coloum3text-text04">{props.text}</span>
      </div>
      <div className="coloum3text-container2">
        <span className="coloum3text-text05">
          <span>Certified</span>
          <br></br>
          <span>Developers &amp; Experts</span>
        </span>
        <span className="coloum3text-text09">{props.text1}</span>
      </div>
      <div className="coloum3text-container3">
        <span className="coloum3text-text10">
          <span>Assured Quality</span>
          <br></br>
          <span>&amp; Performance</span>
        </span>
        <span className="coloum3text-text14">{props.text2}</span>
      </div>
    </section>
  )
}

Coloum3text.defaultProps = {
  text: 'We provide full-cycle game development services that include all phases from designing a game and animations to 2D/3D modeling, coding, and post-release support and maintenance, everything aligned to your specific requirements.',
  text1:
    'We have an ardent team of Unity-certified developers and AR/VR experts who apply premium tools and proven strategies to create lively AR/VR games with splendid gameplay. Our professionals are highly experienced that resonate through the games we develop.',
  rootClassName: '',
  text2:
    'We believe in building long-term relationships with our clients. Our dedicated team thoroughly tests every aspect of the game for compatibility, functionality, performance, errors and bugs. We release the final games only after multiple tests on a specific platform.',
}

Coloum3text.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default Coloum3text
