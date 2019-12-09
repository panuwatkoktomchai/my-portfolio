import React, { Fragment } from 'react'
import 'assets/style/Navbar.scss'
import { withTranslation } from 'react-i18next';
import Modal from 'components/Modal'
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
    const { t } = this.props
    return (
      <Fragment>
        <div className="w3-bar w3-light-grey w3-border custom-nav">
          <a href="/" className="w3-bar-item w3-button w3-orange w3-mobile"><b>{ t('me') }</b></a>
          <a href="/" className="w3-bar-item w3-button w3-hover-orange w3-mobile">{ t('cv') }</a>
          <a href="/" className="w3-bar-item w3-button w3-hover-orange w3-mobile">{ t('education') }</a>
          <input type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder={ t('input-search') }/>
          
          <button onClick={setVisible} className="w3-hover-orange w3-bar-item w3-button w3-clean w3-clean w3-mobile language">
            { t('lanugage') }: <img src="./images/en.png" alt="logo current language" width="20px"/>
          </button>

        </div>

        <Modal color="orange" title="Select language" visible={visible} setVisible={setVisible}>
          <Lanugage/>
        </Modal>

      </Fragment>
    )
  }
}

export default withTranslation('navbar')(Navbar)