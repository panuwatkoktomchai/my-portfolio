import React from 'react'
import Warning from 'components/Warning'
import Me from 'components/Me'
class Hobbies extends React.Component {
  render() {
    return (
      <div>
        <Me
        facebookIcon={ false }
        githubIcon={ false }
        ></Me>
        <div className="w3-center" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Warning 
          text="This page is under development">
          </Warning>
          />
        </div>
      </div>
    )
  }
}

export default Hobbies