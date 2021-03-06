import React, { Fragment } from 'react'
import 'assets/style/Navbar.scss'
import { withTranslation } from 'react-i18next';
import Modal from 'components/Modal'
import Lanugage from 'components/Language'
import { Link } from 'react-router-dom'

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
    const { t, i18n } = this.props
    return (
      <Fragment>
        <div className="w3-bar w3-light-grey custom-nav">
          <Link to="/home" className="w3-bar-item w3-button w3-orange w3-mobile"><b>{ t('me') }</b></Link>
          <Link to="/cv" className="w3-bar-item w3-button w3-hover-orange w3-mobile">{ t('cv') }</Link>
          <Link to="/education" className="w3-bar-item w3-button w3-hover-orange w3-mobile">{ t('hobbie') }</Link>
          <input type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder={ t('input-search') }/>
          
          <button onClick={setVisible} className="w3-hover-orange w3-bar-item w3-button w3-clean w3-clean w3-mobile language">
            { t('lanugage') }: <img src={`./images/${i18n.language}.png`} alt="logo current language" width="20px"/>
          </button>

        </div>

        <Modal color="orange" title={ t('modal.title') } visible={visible} setVisible={setVisible}>
          <Lanugage/>
        </Modal>

      </Fragment>
    )
  }
}

export default withTranslation('navbar')(Navbar)