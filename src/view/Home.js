import React from 'react'
import 'assets/style/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withTranslation } from 'react-i18next';

class Homepage extends React.Component {
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
          <div className="w3-row " style={{backgroundColor: 'rgba(0,0,0,0.9)', color: 'white'}}>
            <div className="w3-col m12 l4 w3-padding">
              <div className="me-card-info w3-card-4 w3-border w3-border-black w3-hover-border-orange">
                <header className="w3-container w3-blue-gray w3-round-large w3-hover-orange w3-text-white">
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
                <header className="w3-container w3-blue-gray w3-round-large w3-hover-orange w3-text-white">
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
                <header className="w3-container w3-blue-gray w3-round-large w3-hover-orange w3-text-white">
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

          <div className="w3-container" style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
              <hr className="w3-white"/>
            <div>
              <div className="w3-padding w3-center">
                <h1 className="me-font w3-text-white"><b>Hightlight	Project</b></h1>
              </div>
              <div className="w3-row-padding">
                <div className="w3-card-4 w3-text-white w3-border w3-border-black w3-hover-border-orange w3-round-large w3-col m12 l6 w3-padding">
                  <div className="w3-center w3-margin">
                    <img width="200px" src="https://ais.caat.or.th/dist/img/logo-ais.png" alt="ais logo"/>
                  </div>
                  <div className="w3-center">
                    <h2 className="me-font"><u>API</u></h2>
                    <p className="me-description">	Thailand	Aeronautical	Information	Service	(AIS)	Redesigned	CAAT	website	and	develop	content management	system</p>
                    <br/>
                    <div className="me-font"><b>Website :</b></div>
                    <a className="me-description me-non-underline w3-hover-orange" href="https://ais.caat.or.th/" target="_blank" rel="noopener noreferrer">https://ais.caat.or.th</a>
                    <br/>
                    <br/>
                    <div><b>Tool :</b></div>
                    <img className="w3-margin" alt="laravel icon" src="./images/laravel.png" width="100px"/>
                    <img className="w3-margin" alt="mysql icon" src="./images/mysql.png" width="100px"/>
                    <img className="w3-margin" alt="docker icon" src="./images/docker.png" width="100px"/>
                    <img className="w3-margin" alt="javascrip icon" src="./images/javascrip.jpg" width="100px"/>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default withTranslation('homepage')(Homepage)