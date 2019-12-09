import React from 'react'
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
function Lanugage() {
  const { t, i18n } = useTranslation('language')
  return(
    <div className="w3-container w3-padding">
      <ul className="w3-ul w3-card-4">
        {
          i18n.languages.map((value) => {
            return (
              <IistItem
              name={ t(`${value}.name`) }
              des= { t(`${value}.description`) }
              lng= { value }
              key={value}
              i18n={i18n}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

function IistItem(props) {
    const { lng, name, des, i18n } = props
    return (
      <li className={`w3-bar ${i18n.language != lng ? 'w3-button' : ''} w3-white`} onClick={() => {if(i18n.language != lng ){i18n.changeLanguage(props.lng)}}}>
        <img src={`./images/${lng}.png`} alt={`logo-${lng}`} className="w3-bar-item w3-circle w3-hide-small" style={{width:85}}/>
        <div className="w3-bar-item">
          <span className="w3-large"> { name } </span><br/>
          <span> { des } </span>
        </div>
      </li>
    )
}

IistItem.propTypes = {
  name: PropTypes.string.isRequired,
  des:  PropTypes.string.isRequired,
  lng:  PropTypes.oneOf(['en', 'th']).isRequired,
}

export default Lanugage