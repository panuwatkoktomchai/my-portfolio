import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Warning(props) {
  return (
    <Fragment>
      <div className="w3-text-white me-margin-top">
        <FontAwesomeIcon className="me-warn-icon" icon="exclamation-circle"/>
      </div>
      <div className="me-font me-margin-bottom">
        <h2 className="w3-text-white me-font">Your device don't support this page</h2>
        { props.children }
      </div>
    </Fragment>
  )
}

export default Warning