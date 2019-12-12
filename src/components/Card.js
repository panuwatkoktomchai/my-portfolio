import React from 'react'
import PropTypes from 'prop-types';

function Card(props) {
  const Title = props.noTitle ? '' : () => {
    return(
      <header className="me-underline-orange w3-container w3-blue-gray w3-round-large w3-hover-orange w3-text-white">
        <h1>{ props.title }</h1>
      </header>
    )
  }
  return(
    <div className="me-card-info w3-card-4 w3-border w3-border-black w3-hover-border-orange w3-round-large">
      <Title></Title>
      <div className="w3-container me-description">
        {props.children}
      </div>
      <footer className="w3-container">
        <h5 className="w3-text-orange">{ props.footer }</h5>
      </footer>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  noTitle: PropTypes.bool,
  footer: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
Card.defaultProps = {
  noTitle: false
}


export default Card;