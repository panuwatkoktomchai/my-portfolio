import React, { useState } from 'react'

function Carousel(props) {
  const [ slideIndex, setSlideIndex ] = useState(1)

  const plusDivs = n => {
    showDivs(slideIndex += n);
  }

  const showDivs = n => {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";
  }
  return (
    <div>
      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3css/img_snowtops.jpg" style={{ width: '100%' }}/>
        <div className="w3-display-bottomleft w3-large w3-container w3-padding-16 w3-black">
          French Alps
        </div>
      </div>

      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3css/img_lights.jpg" style={{ width: '100%' }}/>
        <div className="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black">
          Northern Lights
        </div>
      </div>

      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3css/img_mountains.jpg" style={{ width: '100%' }}/>
        <div className="w3-display-topleft w3-large w3-container w3-padding-16 w3-black">
          Beautiful Mountains
        </div>
      </div>

      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3css/img_forest.jpg" style={{ width: '100%' }}/>
        <div className="w3-display-topright w3-large w3-container w3-padding-16 w3-black">
          The Rain Forest
        </div>
      </div>

      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3css/img_mountains.jpg" style={{ width: '100%' }}/>
        <div className="w3-display-middle w3-large w3-container w3-padding-16 w3-black">
          Mountains!
        </div>
      </div>

      <button className="w3-button w3-display-left w3-black" onclick="plusDivs(-1)">&#10094;</button>
      <button className="w3-button w3-display-right w3-black" onclick="plusDivs(1)">&#10095;</button>
    </div>
  )
}

Carousel.defaultProps = {

}

export default Carousel;