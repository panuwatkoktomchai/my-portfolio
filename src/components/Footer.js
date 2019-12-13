import React from 'react'
import 'assets/style/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className=" me-footer w3-blue-gray w3-center me-description">
      <h3 className="me-font">Thank you for visiting</h3>
      <span>Develop with </span><a href="https://reactjs.org/">Reactjs</a>
      <p>source code at github
        <a href="https://github.com/panuwatkoktomchai/my-portfolio" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="w3-text-white" icon={['fab','github']}/>
        </a>
      </p>
    </div>
  )
}

export default Footer