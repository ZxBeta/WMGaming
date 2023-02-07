import React from 'react'

import PropTypes from 'prop-types'

import './state-of-art.css'

const StateOfArt = (props) => {
  return (
    <div className={`state-of-art-container ${props.rootClassName} `}>
      <span className="state-of-art-text green-outliner">{props.text}</span>
      <div className="state-of-art-container1">
        <span className="state-of-art-text1 green-outliner">{props.text1}</span>
        <div className="state-of-art-container2">
          <span className="state-of-art-text2 green-outliner">
            {props.text3}
          </span>
          <span className="state-of-art-text3 outlineColorChanger green-outliner">
            {props.text4}
          </span>
        </div>
        <span className="state-of-art-text4 green-outliner">{props.text2}</span>
      </div>
    </div>
  )
}

StateOfArt.defaultProps = {
  text2: 'Solution',
  text1: 'OF ART',
  text3: 'Visual',
  text: 'STATE',
  text4: 'Gaming',
  rootClassName: '',
}

StateOfArt.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default StateOfArt
