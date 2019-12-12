import React from 'react'
import { withTranslation } from 'react-i18next';
import Me from 'components/Me'
import Card from 'components/Card'
import MyProject from 'components/MyProject'

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

          <div className="w3-container" style={{backgroundColor: 'rgba(0,0,0,0.9)', paddingBottom: 100}}>
            <hr className="w3-white"/>
            <div className="w3-padding w3-center">
              <h1 className="me-font w3-text-white w3-round-large w3-hover-orange me-project"><b>Project</b></h1>
            </div>
            <div className="w3-row w3-margin">
              <div className="w3-col m12 l6">
                <MyProject
                logo="https://ais.caat.or.th/dist/img/logo-ais.png"
                projectNmae={ t('aip.name') }
                description={ t('aip.description') }
                website="https://ais.caat.or.th/"
                footer={ t('aip.footer') }
                tools={['laravel.png', 'mysql.png', 'docker.png', 'bootstrap.png', 'javascrip.jpg']}
                />
              </div>
              <div className="w3-col m12 l6">
                <MyProject
                logo="https://mobile.dwr.go.th/resources/adminLTE-2.4.2/dist/img/logo-water.png"
                projectNmae={ t('w4t.name') }
                description={ t('w4t.description') }
                footer={ t('w4t.footer') }
                tools={['laravel.png', 'soketio.png', 'graphql.png', 'mysql.png', 'docker.png', 'bootstrap.png', 'javascrip.jpg']}
                />
              </div>

              <div className="w3-col m12 l6">
                <MyProject
                logo="./images/tfic.png"
                projectNmae={ t('tfi.name') }
                description={ t('tfi.description') }
                footer={ t('tfi.footer') }
                tools={['php.png', 'laravel.png', 'soketio.png', 'mysql.png', 'bootstrap.png', 'javascrip.jpg']}
                />
              </div>

              <div className="w3-col m12 l6">
                <MyProject
                logo="https://suvarnabhumimap.gistda.or.th/assets/images/gistda-logo.png"
                projectNmae={ t('gistda.name') }
                description={ t('gistda.description') }
                website="https://suvarnabhumimap.gistda.or.th/th"
                footer={ t('gistda.footer') }
                tools={['docker.png', 'javascrip.jpg', 'openlayer.png']}
                />
              </div>

            </div> {/** End row */}
          </div> {/**End content of project */}
        </div>
      </div>
    )
  }
}

export default withTranslation('homepage')(Homepage)