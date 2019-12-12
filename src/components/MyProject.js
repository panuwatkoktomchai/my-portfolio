import React from 'react'
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

function MyProject(props) {
    const { t } = props
    return ( 
    <div className="w3-card w3-container w3-text-white w3-hover-black">
      <br/>
      <br/>
      <br/>
      <div style={{ height: 200 }} className="w3-center w3-margin">
        <img width="200px" src={ props.logo } alt="project logo"/>
      </div>
      <div className="w3-center">
        <h2 className="me-font"><u>{ props.projectNmae }</u></h2>
        <p className="me-description">{ props.description }</p>
        <br/>
        <div className="me-font"><b> { t('website') } </b></div>
        <a className="me-description me-non-underline w3-hover-orange" href={ props.website ? props.website : '' } target="_blank" rel="noopener noreferrer">{ props.website ? props.website : '-' }</a>
        <br/>
        <br/>
        <div className="me-font"><b>{ t('tool') }</b></div>
        {
          props.tools.map((value)=> {
            return(
              <img key={value} className="w3-margin" alt={ value } src={`./images/${ value }`} width="100px"/>            
            )
          })
        }
      </div>

      <div className="w3-tag w3-round w3-orange" style={{padding: 3}}>
        <div className="w3-tag w3-round w3-orange w3-border w3-border-white me-font">
          { props.footer }
        </div>
      </div>
 
    </div>
  )
}

MyProject.propTypes = {
  logo: PropTypes.string.isRequired,
  projectNmae: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string,
  footer: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired
}

export default withTranslation('project')(MyProject)
