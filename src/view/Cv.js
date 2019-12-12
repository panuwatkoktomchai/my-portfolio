import React, { Component } from 'react';
import pdf from 'assets/My-portfolio-blue.pdf';
import { BrowserView, MobileView } from "react-device-detect";

export default class CV extends Component {
  state = {
    numPages: null,
  }

  render() {
    return (
      // <embed scrolling="no" src={pdf} width="100%" height={window.innerHeight-194}/>
      <div>
        <MobileView>
          <div className="w3-black" style={{textAlign: 'center'}}>
            <h2 className="w3-text-white">Your device don't support this page</h2>
            <span className="w3-white">Click button to download</span><br/>
            <a href={pdf} className="w3-button w3-blue">Download</a>
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