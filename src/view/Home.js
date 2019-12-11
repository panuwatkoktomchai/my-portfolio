import React from 'react'
import 'assets/style/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div style={{textAlign: 'center'}} >
            <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '100%'}}>
              <div className="me-title" style={{paddingTop: 10}}>
                <h1 className="w3-text-white">Panuwat Koktomchai</h1>
                <h2 className="w3-text-white"><b>Software	Developer</b></h2>
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
            </div>
          </div>

          <div className="w3-row w3-black">
            <div className="w3-col m12 l4 w3-padding">
              <div className="w3-card-4 w3-border w3-border-black w3-hover-border-orange">
                <header className="w3-container w3-blue-gray w3-hover-orange w3-text-white">
                  <h1>EXPERIENCE</h1>
                </header>

                <div className="w3-container me-description">
                  <ul>
                    <li>
                      Develop	Back-End	web	application	using	Laravel, Node	with	Mysql	database
                    </li>
                    <li>
                      Develop	Front-End	web	application	using	Reactjs, Vuejs	and	another	JavaScript	framework.	
                    </li>
                    <li>
                      Develop	web	application	with	Docker	containers
                    </li>
                    <li>
                      Testing	and	Maintenance	responsibility project application.
                    </li>
                    <li>
                      Develop	web	application	in	Linux	OS
                    </li>
                  </ul>
                </div>
                <footer className="w3-container">
                  <h5 className="w3-text-orange">2018 - Current</h5>
                </footer>
              </div>
            </div>{/** End class row 12 */}
            <div className="w3-col m12 l4 w3-padding">
              <div className="w3-card-4 w3-border w3-border-black w3-hover-border-orange">
                <header className="w3-container w3-blue-gray w3-hover-orange w3-text-white">
                  <h1>SKILL</h1>
                </header>
                <div className="w3-container me-description">
                  <ul>
                    <li className="w3-tag w3-orange"> Programming	language</li>
                    <ul>
                      <li>
                        : PHP,	SQL	Command,	JavaScript	CSS,	HTML5,	
                      </li>
                    </ul>
                    <li className="w3-tag w3-orange"> Framework</li>
                    <ul>
                      <li>
                        : Bootstrap	4,	Laravel	5.6,	Reactjs,	Vuejs,	Nodejs,	Openlayer, Socket.io,	AngularJs		
                      </li>
                    </ul>
                    <li className="w3-tag w3-orange"> Databases</li>
                    <ul>
                      <li>
                        : MySQL
                      </li>
                    </ul>
                    <li className="w3-tag w3-orange"> Additional	/	Tool</li>
                    <ul>
                      <li>
                        : Gitlab,	Git	Flow,	Gitlab	CI/CD,	postman,	Trello
                      </li>
                    </ul>
                  </ul>
                </div>
                <footer className="w3-container">
                  <h5 className="w3-text-orange">2018 - Current</h5>
                </footer>
              </div>
            </div>{/** End class row 12 */}
            <div className="w3-col m12 l4 w3-padding">
              <div className="w3-card-4 w3-border w3-border-black w3-hover-border-orange">
                <header className="w3-container w3-blue-gray w3-hover-orange w3-text-white">
                  <h1>TRAINING COURSE</h1>
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
                  <h5 className="w3-text-orange">2018 - Current</h5>
                </footer>
              </div>
            </div> {/** End class row 12 */}
          </div>{/** End block row */}

          {/* <div className="w3-blue-gray w3-container">
            <h1>Contact me</h1>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Homepage