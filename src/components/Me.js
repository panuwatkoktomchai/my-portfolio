import React from 'react'
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Me(props) {
  const { t } = props
  return (
    <div style={{textAlign: 'center'}} >
      <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '100%'}}>
        <div className="me-title" style={{paddingTop: 10}}>
          <h1 className="w3-text-white"> { t('header.myname') } </h1>
          <h2 className="w3-text-white"><b>{ t('header.position') }</b></h2>
          <img style={{height:250, width: 250, borderRadius: '50%'}} src="./images/me.jpg" alt="me.jpg"/>
        </div>

        <div className="me-social w3-margin">
          <a href="https://www.facebook.com/MarioDeveloper" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w3-text-white" icon={['fab','facebook']}/>
          </a>
          <a href="https://github.com/panuwatkoktomchai" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w3-text-white" icon={['fab','github']}/>
          </a>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default withTranslation('homepage')(Me)