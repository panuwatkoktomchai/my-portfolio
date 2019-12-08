import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Modal(props) {
  return (
    <div className="w3-modal" style={{display: props.visible ? 'block' : 'none'}}>
      <div className={`w3-clean w3-modal-content w3-animate-${props.animate} w3-card-4`}>
        <header className={`w3-container w3-${props.color}`}>
          <span onClick={props.setVisible} className="w3-button w3-display-topright">&times;</span>
          <h2>{props.title}</h2>
        </header>

        <div className="w3-container">
          {props.children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  /** Display or hidden Modal */
  visible: PropTypes.bool,
  /** Text title of modal */
  title: PropTypes.string,
  /** Color background of title modal */
  color: PropTypes.string,
  /** Animation of w3.css top, left, right, bottom */
  animate: PropTypes.oneOf(['top','bottom','right','left']),
  /** Function update Modal */
  setVisible: PropTypes.func.isRequired,
  /** Content in modal  */
  children: PropTypes.element.isRequired
}

Modal.defaultProps = {
  visible: false,
  animate: 'top',
  title: 'Modal Title',
  color: 'black',
}


export default Modal;