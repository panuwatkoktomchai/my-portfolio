import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

function ContactItem(props) {
  const { t } = props
  return (
    <Fragment>
      <input hidden value={ props.text } onChange={ () => {} }/>
      <FontAwesomeIcon className="icon" icon={ props.icon }/><br/>
      <p > { props.text } </p>
      <CopyToClipboard text={ props.text }>
        <button className="w3-button w3-orange"> { t('copy') }  <FontAwesomeIcon icon="copy"/><br/> </button>
      </CopyToClipboard>
    </Fragment>
  )
}

ContactItem.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  text: PropTypes.string.isRequired
}

export default withTranslation('contact')(ContactItem)