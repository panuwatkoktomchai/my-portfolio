import React, { Component } from 'react';
import pdf from 'assets/My-portfolio-blue.pdf';

export default class CV extends Component {
  state = {
    numPages: null,
  }

  render() {
    return (
      <embed src={pdf} width="100%" height={window.innerHeight-190}/>

    );
  }
}