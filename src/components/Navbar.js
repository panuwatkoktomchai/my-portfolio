import React, { Fragment } from 'react'
import 'assets/style/Navbar.scss'
import { withTranslation } from 'react-i18next';
import Modal from 'components/Modal'
import Lanugage from 'components/Language'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      url: '/'
    }
  }
  
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ url: location.pathname })
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { visible, url } = this.state
    const setVisible = () => {
      this.setState({visible: !visible})
    }
    const { t, i18n } = this.props
    return (
      <Fragment>
        <div className="w3-row w3-bar w3-light-grey custom-nav">
          <div className="w3-col m12 l10">
            <Link to="/home" className={`${url==='/home' ? 'w3-orange' : 'w3-hover-orange'} w3-bar-item w3-button w3-mobile`}><b>{ t('me') }</b></Link>
            <Link to="/cv" className={`${url==='/cv' ? 'w3-orange' : 'w3-hover-orange'} w3-bar-item w3-button w3-mobile`}>{ t('cv') }</Link>
            <Link to="/hobbies" className={`${url==='/hobbies' ? 'w3-orange' : 'w3-hover-orange'} w3-bar-item w3-button w3-mobile`}>{ t('hobbie') }</Link>
            <Link to="/project" className={`${url==='/project' ? 'w3-orange' : 'w3-hover-orange'} w3-bar-item w3-button w3-mobile`}>{ t('project') }</Link>
            <Link to="/contact" className={`${url==='/contact' ? 'w3-orange' : 'w3-hover-orange'} w3-bar-item w3-button w3-mobile`}>{ t('contact') }</Link>
            {/* <input disabled type="text" className="w3-bar-item w3-input w3-white w3-mobile" placeholder={ t('input-search') }/> */}
          </div>
          <div className="w3-col m12 l2">
            <button onClick={ setVisible } className="w3-hover-orange w3-bar-item w3-button w3-clean w3-clean w3-mobile language">
              { t('lanugage') }: <img src={`./images/${ i18n.language }.png`} alt="logo current language" width="20px"/>
            </button>
          </div>
          

        </div>

        <Modal color="orange" title={ t('modal.title') } visible={visible} setVisible={setVisible}>
          <Lanugage/>
        </Modal>

      </Fragment>
    )
  }
}

export default withRouter(withTranslation('navbar')(Navbar))