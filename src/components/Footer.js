import React from 'react'
import 'assets/style/Footer.scss'
import { withTranslation } from 'react-i18next';

function Footer({ t }) {
  return (
    <div className=" me-footer w3-blue-gray w3-center me-description">
      <h3 className="me-font"> { t('tanks') } </h3>
      {/* <span> { t('tool') } </span><a href="https://reactjs.org/">Reactjs</a> */}
      <p>
        { t('version') }
      </p>
    </div>
  )
}

export default withTranslation(['footer'])(Footer)