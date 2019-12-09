import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <FontAwesomeIcon className="w3-spin" style={{fontSize: 50}} icon="circle-notch" />
    </div>
  )
}

export default LoadingOverlay