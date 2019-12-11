import React from 'react'
import 'assets/style/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div style={{height: 500, textAlign: 'center', backgroundImage:'url(http://localhost:3000/images/book-background.jpg)'}} >
            <div style={{backgroundColor: 'rgba(0,0,0,0.7)', height: '100%'}}>
              <div className="me-title" style={{paddingTop: 10}}>
                <h1 className="w3-text-white">Panuwat Koktomchai</h1>
                <h2 className="w3-text-white"><b>Software	Developer</b></h2>
                <img style={{height:250, width: 250, borderRadius: '50%'}} src="http://localhost:3000/images/th.png" alt="th.png"/>
              </div>

              <div className="me-social w3-margin">
                <a href="https://www.facebook.com/MarioDeveloper" target="_blank">
                  <FontAwesomeIcon className="w3-text-white" icon={['fab','facebook']}/>
                </a>
                <a href="https://github.com/panuwatkoktomchai" target="_blank">
                  <FontAwesomeIcon className="w3-text-white" icon={['fab','github']}/>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-light-gray" style={{height: 500 }} >
          </div>
          </div>
      </div>
    )
  }
}

export default Homepage