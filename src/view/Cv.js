import React, { Component } from 'react';
import pdf from 'assets/My-portfolio-blue.pdf';
import { BrowserView, MobileView } from "react-device-detect";
import Warnning from 'components/Warning'

export default class CV extends Component {
  state = {
    numPages: null,
  }

  render() {
    return (
      // <embed scrolling="no" src={pdf} width="100%" height={window.innerHeight-194}/>
      <div>
        <MobileView>
          <div className="w3-padding" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <Warnning>
              <div>
                <span className="w3-text-white">Click button to download</span><br/>
                <a href={pdf} className="w3-button w3-blue">Download</a>
              </div>
            </Warnning>
          </div>
        </MobileView>
        <BrowserView>
          <object data={pdf} width="100%" height={window.innerHeight-194}>
            <p>Oops! You don't support PDFs!</p>
            <p><a href={pdf}>Download Instead</a></p>
          </object>
        </BrowserView>
      </div>
    );
  }
}