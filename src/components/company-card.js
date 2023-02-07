import React from 'react'

import PropTypes from 'prop-types'

import './company-card.css'

const CompanyCard = (props) => {
  return (
    <div className={`company-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="company-card-image"
      />
    </div>
  )
}

CompanyCard.defaultProps = {
  image_alt: 'Company Logo',
  image_src: 'https://iili.io/H7XiBt4.png',
  rootClassName: '',
}

CompanyCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CompanyCard
