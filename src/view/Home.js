import React from 'react'
import 'assets/style/Home.scss'
import { withTranslation } from 'react-i18next';
import Card from 'components/Card'
import Me from 'components/Me'

class Homepage extends React.Component {
  render() {
    const { t } = this.props
    return (
      <div>
        <div>
          <Me/>
          <div className="w3-row " style={{backgroundColor: 'rgba(0,0,0,0.9)', color: 'white'}}>
            <div className="w3-col m12 l4 w3-padding">
              <Card
              title={ t('experience.title') }
              footer={ t('experience.timeline') }
              >
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
              </Card>
            </div>{/** End class col */}

            <div className="w3-col m12 l4 w3-padding">
              <Card
              title={ t('skill.title') }
              footer={ t('skill.timeline') }
              >
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
              </Card>
            </div>{/** End class col */}
            <div className="w3-col m12 l4 w3-padding">
              <Card
              title={ t('training.title') }
              footer={ t('training.timeline') }
              >
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
              </Card>
            </div> {/** End class row 12 */}
          </div>{/** End block row */}

          <div className="w3-container" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <hr className="w3-white"/>
            <div>
              <div className="w3-padding w3-center">
                <h1 className="me-font w3-text-white w3-black w3-round-large "><b>Project</b></h1>
              </div>
              <div className="w3-row">
                <div className="w3-card w3-container w3-text-white w3-border w3-border-black w3-hover-border-orange w3-round-large w3-col m12 l6">
                  <div style={{height: 200}} className="w3-center w3-margin">
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
                    <img className="w3-margin" alt="bootstrap icon" src="./images/bootstrap.png" width="100px"/>
                    <img className="w3-margin" alt="javascrip icon" src="./images/javascrip.jpg" width="100px"/>
                  </div>
                  <div className="w3-container me-font">
                    2018. @Piesoft
                  </div>
                </div>

                <div className="w3-card w3-text-white w3-border w3-border-black w3-hover-border-orange w3-round-large w3-col m12 l6 w3-padding">
                  <div style={{height: 200}} className="w3-center w3-margin">
                    <img width="200px" src="https://mobile.dwr.go.th/resources/adminLTE-2.4.2/dist/img/logo-water.png" alt="ais logo"/>
                  </div>
                  <div className="w3-center">
                    <h2 className="me-font"><u>Water	for	life</u></h2>
                    <p className="me-description">Department	of	Water	Resource	(DWR). Developed	website	and	service	for	mobile	application	to show	data	such	as	water	situation	information	and Telemetry	location	in	Thailand.</p>
                    <br/>
                    <div className="me-font"><b>Website :</b></div>
                    -
                    <br/>
                    <br/>
                    <div><b>Tool :</b></div>
                    <img className="w3-margin" alt="laravel icon" src="./images/laravel.png" width="100px"/>
                    <img className="w3-margin" alt="socket icon" src="./images/soketio.png" width="100px"/>
                    <img className="w3-margin" alt="graphql icon" src="./images/graphql.png" width="100px"/>
                    <img className="w3-margin" alt="mysql icon" src="./images/mysql.png" width="100px"/>
                    <img className="w3-margin" alt="docker icon" src="./images/docker.png" width="100px"/>
                    <img className="w3-margin" alt="bootstrap icon" src="./images/bootstrap.png" width="100px"/>
                    <img className="w3-margin" alt="javascrip icon" src="./images/javascrip.jpg" width="100px"/>
                  </div>
                  <div className="w3-container me-font">
                    2018. @Piesoft
                  </div>
                </div>

                <div className="w3-card w3-text-white w3-border w3-border-black w3-hover-border-orange w3-round-large w3-col m12 l6 w3-padding">
                  <div style={{height: 200}} className="w3-center w3-margin">
                    <img width="200px" src="./images/tfic.png" alt="ais logo"/>
                  </div>
                  <div className="w3-center">
                    <h2 className="me-font"><u>Thai	Flight	Information</u></h2>
                    <p className="me-description">Department	of	Airports. Maintenance	website[CMS] Service of mobile and Database.</p>
                    <br/>
                    <div className="me-font"><b>Website :</b></div>
                    -
                    <br/>
                    <br/>
                    <div><b>Tool :</b></div>
                    <img className="w3-margin" alt="php icon" src="./images/php.png" width="100px"/>
                    <img className="w3-margin" alt="laravel icon" src="./images/laravel.png" width="100px"/>
                    <img className="w3-margin" alt="socket icon" src="./images/soketio.png" width="100px"/>
                    <img className="w3-margin" alt="mysql icon" src="./images/mysql.png" width="100px"/>
                    <img className="w3-margin" alt="javascrip icon" src="./images/javascrip.jpg" width="100px"/>
                  </div>
                  <div className="w3-container me-font">
                    2018-2019. @Piesoft
                  </div>
                </div>

                <div className="w3-card w3-text-white w3-border w3-border-black w3-hover-border-orange w3-round-large w3-col m12 l6 w3-padding">
                  <div style={{height: 200}} className="w3-center w3-margin">
                    <img width="200px" src="https://suvarnabhumimap.gistda.or.th/assets/images/gistda-logo.png" alt="ais logo"/>
                  </div>
                  <div className="w3-center">
                    <h2 className="me-font"><u>GISTDA	(Suvarnabhumi	app)</u></h2>
                    <p className="me-description">Geo-Informatics	and	Space	Technology	Development Agency.	Developed	website	and	service	to	manage	and show	geolocation	such	as	historical	location.</p>
                    <br/>
                    <div className="me-font"><b>Website :</b></div>
                    <a className="me-description me-non-underline w3-hover-orange" href="https://suvarnabhumimap.gistda.or.th/th" target="_blank" rel="noopener noreferrer">https://suvarnabhumimap.gistda.or.th</a>
                    <br/>
                    <br/>
                    <div><b>Tool :</b></div>
                    <img className="w3-margin" alt="docker icon" src="./images/docker.png" width="100px"/>
                    <img className="w3-margin" alt="javascrip icon" src="./images/javascrip.jpg" width="100px"/>
                    <img className="w3-margin" alt="openlayer icon" src="./images/openlayer.png" width="100px"/>
                  </div>
                  <div className="w3-container me-font">
                    2019. @Piesoft
                  </div>
                </div>

              </div> {/** End row */}
            </div>
          </div> {/**End content of project */}

          <div>
            <div className="w3-padding w3-center">
                <h1 className="me-font w3-text-white w3-blue-gray w3-round-large"><b>Contact me</b></h1>
              </div>
          </div> {/** End Contact me*/}
          
        </div>
      </div>
    )
  }
}

export default withTranslation('homepage')(Homepage)