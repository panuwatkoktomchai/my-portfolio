import React from 'react'
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

function Me(props) {
  const { t } = props
  const facebook = !props.facebookIcon ? '' : (
      <a href="https://www.facebook.com/MarioDeveloper" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="w3-text-white" icon={['fab','facebook']}/>
      </a>
    )
  const github = !props.githubIcon ? '' : (
      <a href="https://github.com/panuwatkoktomchai" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="w3-text-white" icon={['fab','github']}/>
      </a>
    )
  return (
    <div style={{textAlign: 'center'}} >
      <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '100%'}}>
        <div className="me-title" style={{paddingTop: 10}}>
          <h1 className="w3-text-white"> { t('header.myname') } </h1>
          <h2 className="w3-text-white"><b>{ t('header.position') }</b></h2>
          <img style={{height:250, width: 250, borderRadius: '50%'}} src="./images/me.jpg" alt="me.jpg"/>
        </div>

        <div className="me-social w3-margin">
          { facebook }
          { github }
        </div>
        <br/>
        <br/>
      </div>
    </div>
  )
}

Me.propTypes = {
  facebookIcon: PropTypes.bool,
  githubIcon: PropTypes.bool
}

Me.defaultProps = {
  facebookIcon: true,
  githubIcon: true
}

export default withTranslation('homepage')(Me)