import React from 'react'
function Lanugage() {
  return(
    <div className="w3-container w3-padding">
      <ul className="w3-ul w3-card-4">
        <li className="w3-bar w3-button w3-white">
          <img src="./images/en.png" alt="logo en" className="w3-bar-item w3-circle w3-hide-small" style={{width:85}}/>
          <div className="w3-bar-item">
            <span className="w3-large">Mike</span><br/>
            <span>English</span>
          </div>
        </li>
        <li className="w3-bar w3-button w3-white">
          <img src="./images/th.png" alt="logo th" className="w3-bar-item w3-circle w3-hide-small" style={{width:85}}/>
          <div className="w3-bar-item">
            <span className="w3-large">Mike</span><br/>
            <span>ไทย</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Lanugage