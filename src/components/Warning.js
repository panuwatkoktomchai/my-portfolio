import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

function Warning(props) {
  return (
    <div style={{ height:window.innerHeight-406 }}>
      <div className="w3-text-white me-padding-top">
        <FontAwesomeIcon className="me-warn-icon" icon="exclamation-circle"/>
      </div>
      <div className="me-font me-margin-bottom">
        <h2 className="w3-text-white me-font">{props.text}</h2>
        { props.children }
      </div>
    </div>
  )
}

Warning.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string.isRequired,
}

Warning.defaultProps = {
  text: 'Your device don\'t support this page'
}

export default Warning