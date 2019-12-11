import React from 'react'
import 'assets/style/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withTranslation } from 'react-i18next';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { t } = this.props
    return (
      <div>
        <div>
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
          <div className="w3-row w3-black">
            <div className="w3-col m12 l4 w3-padding">
              <div className="me-card-info w3-card-4 w3-border w3-border-black w3-hover-border-orange">
                <header className="w3-container w3-blue-gray w3-hover-orange w3-text-white">
                  <h1>{ t('experience.title') }</h1>
                </header>

                <div className="w3-container me-description">
                  <ul>
                    <li>
                    { t('experience.des1') }
                    </li>
                    <li>
                    { t('experience.des2') }
                    </li>
                    <li>
                    { t('experience.des3') }
                    </li>
                    <li>
                    { t('experience.des4') }
                    </li>
                    <li>
                    { t('experience.des5') }
                    </li>
                  </ul>
                </div>
                <footer className="w3-container">
                  <h5 className="w3-text-orange">{ t('experience.timeline') }</h5>
                </footer>
              </div>
            </div>{/** End class row 12 */}
            <div className="w3-col m12 l4 w3-padding">
              <div className="me-card-info w3-card-4 w3-border w3-border-black w3-hover-border-orange">
                <header className="w3-container w3-blue-gray w3-hover-orange w3-text-white">
                  <h1>{ t('skill.title') }</h1>
                </header>
                <div className="w3-container me-description">
                  <ul>
                    <li className="w3-tag w3-orange">{ t('skill.topic1') }</li>
                    <ul>
                      <li>
                        : PHP,	SQL	Command,	JavaScript	CSS,	HTML5,	
                      </li>
                    </ul>
                    <li className="w3-tag w3-orange"> { t('skill.topic2') }</li>
                    <ul>
                      <li>
                        : Bootstrap	4,	Laravel	5.6,	Reactjs,	Vuejs,	Nodejs,	Openlayer, Socket.io,	AngularJs		
                      </li>
                    </ul>
                    <li className="w3-tag w3-orange"> { t('skill.topic3') }</li>
                    <ul>
                      <li>
                        : MySQL
                      </li>
                    </ul>
                    <li className="w3-tag w3-orange"> { t('skill.topic4') }</li>
                    <ul>
                      <li>
                        : Gitlab,	Git	Flow,	Gitlab	CI/CD,	postman,	Trello
                      </li>
                    </ul>
                  </ul>
                </div>
                <footer className="w3-container">
                  <h5 className="w3-text-orange">{ t('skill.timeline') }</h5>
                </footer>
              </div>
            </div>{/** End class row 12 */}
            <div className="w3-col m12 l4 w3-padding">
              <div className="me-card-info w3-card-4 w3-border w3-border-black w3-hover-border-orange">
                <header className="w3-container w3-blue-gray w3-hover-orange w3-text-white">
                  <h1>{ t('training.title') }</h1>
                </header>
                <div className="w3-container me-description">
                    <ul>
                      <li>
                        Nodejs for Enterprise
                      </li>
                      <li>
                        Docker from zero to hero
                      </li>
                      <li>
                        Vuejs 
                      </li>
                    </ul>
                </div>
                <footer className="w3-container">
                  <h5 className="w3-text-orange">{ t('training.timeline') }</h5>
                </footer>
              </div>
            </div> {/** End class row 12 */}
          </div>{/** End block row */}

          {/* <div className="w3-blue-gray w3-container">
            <h1>Contact me</h1>
            <div className="w3-row">
            </div>
          </div> */}
          
        </div>
      </div>
    )
  }
}

export default withTranslation('homepage')(Homepage)