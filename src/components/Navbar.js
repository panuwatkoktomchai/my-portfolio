import React, { Fragment } from 'react'
import 'assets/style/Navbar.scss'
import Modal from 'components/app/Modal'
import Lanugage from 'components/Language'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    const { visible } = this.state
    const setVisible = () => {
      this.setState({visible: !visible})
    }
    return (
      <Fragment>
        <div className="w3-bar w3-light-grey w3-border custom-nav">
          <a href="/" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Home</a>
          <a href="/" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Link 1</a>
          <a href="/" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Link 2</a>
          <input type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder="Search.."/>
          
          <button onClick={setVisible} className="w3-bar-item w3-button w3-clean w3-clean w3-mobile language">
            Language: <img src="./images/en.png" width="20px"/>
          </button>

        </div>
        <Modal title="Select language" visible={visible} setVisible={setVisible}>
          <Lanugage/>
        </Modal>
      </Fragment>
    )
  }
}

export default Navbar