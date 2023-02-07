import React from 'react'

import PropTypes from 'prop-types'

import Review from './review'
import './client-feedback-old.css'

const ClientFeedbackOld = (props) => {
  return (
    <section className="client-feedback-old-section">
      <div className="client-feedback-old-container">
        <header className="client-feedback-old-header">
          <header className="client-feedback-old-left">
            <h2 className="client-feedback-old-heading Heading colortexter colortext section-heading1">
              {props.Heading}
            </h2>
          </header>
          <div className="client-feedback-old-right">
            <p className="client-feedback-old-paragraph section-description Content">
              {props.Paragraph}
            </p>
          </div>
        </header>
        <main className="client-feedback-old-cards">
          <div className="client-feedback-old-container1">
            <Review
              Quote="WebMobril has done an amazing job on the creation Of my computer platform. My knees were very specific and I didn’t know if I could find programmers that could program the nuance I needed in my platform but WebMobril pulled it off with flying colors. Being a programmer myself I was able to appreciate the challenge I gave the team at webmobril. They were able to understand exactly what I needed and then delivered it with a minimum of oversight."
              Author="John Alexander"
              Position="Author, Real Estate Investor, Real Estate Trainer"
              rootClassName="review-root-class-name7"
            ></Review>
            <Review
              Quote="WebMobril has done an amazing job on the creation Of my computer platform. My knees were very specific and I didn’t know if I could find programmers that could program the nuance I needed in my platform but WebMobril pulled it off with flying colors. Being a programmer myself I was able to appreciate the challenge I gave the team at webmobril. They were able to understand exactly what I needed and then delivered it with a minimum of oversight."
              Author="John Alexander"
              Position="Author, Real Estate Investor, Real Estate Trainer"
              rootClassName="review-root-class-name8"
            ></Review>
          </div>
          <div className="client-feedback-old-container2">
            <Review
              Quote="We have worked with Webmobril since 2017. Yes, we have our ups and downs. They never fail to give their utmost best. They are attentive to my needs and go the extra mile at no additional cost. They are committed to improving their service and very open to receiving feedback. It has been an amazing journey."
              Author="Ben Koh"
              Position="Founder &amp; Managing Director"
              rootClassName="review-root-class-name6"
            ></Review>
            <Review
              Quote="WebMobril has done an amazing job on the creation Of my computer platform. My knees were very specific and I didn’t know if I could find programmers that could program the nuance I needed in my platform but WebMobril pulled it off with flying colors. Being a programmer myself I was able to appreciate the challenge I gave the team at webmobril. They were able to understand exactly what I needed and then delivered it with a minimum of oversight."
              Author="John Alexander"
              Position="Author, Real Estate Investor, Real Estate Trainer"
              rootClassName="review-root-class-name9"
            ></Review>
          </div>
          <div className="client-feedback-old-container3"></div>
        </main>
        <div className="client-feedback-old-view-more">
          <p className="client-feedback-old-text">{props.Text}</p>
        </div>
      </div>
    </section>
  )
}

ClientFeedbackOld.defaultProps = {
  Text: 'View more',
  Heading: 'What clients say about us',
  Paragraph:
    'Gaining a competitive edge through our customer centric approach and delivering exemplary games, we have managed to build a strong clientele relationship.',
}

ClientFeedbackOld.propTypes = {
  Text: PropTypes.string,
  Heading: PropTypes.string,
  Paragraph: PropTypes.string,
}

export default ClientFeedbackOld
