import React from 'react'
import Me from 'components/Me'
import ContactItem from 'components/ContactItem'

class ContactMe extends React.Component { 
  state = {
    phone: '081-142-7077',
    mail: 'panuwat_koktomchai@hotmail.com',
    line: 'oh_1907'
  }
  render() {
    return (
      <div className="">
        <Me
        facebookIcon={ false }
        githubIcon={ false }
        ></Me>
        <div className="me-contact w3-row" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
          
          <div className="me-icon w3-col m12 l4 w3-center me-description" >
            <ContactItem
            text={ this.state.phone }
            icon="phone"
            />
          </div>

          <div className="me-icon w3-col m12 l4 w3-center me-description" >
            <ContactItem
            text={ this.state.mail }
            icon="envelope-open"
            />
          </div>
          <div className="me-icon w3-col m12 l4 w3-center me-description" >
            <ContactItem
            text={ this.state.line }
            icon={ ['fab','line'] }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe