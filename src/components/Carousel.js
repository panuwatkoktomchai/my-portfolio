import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
function Item(props) {
	return (
		<Fragment>
			<img src={ props.src } style={{ width: '100%' }}/>
			{
				props.position ?
				<div className={ `w3-display-${ props.position } w3-large w3-container w3-padding-16 w3-black` }>
					{ props.title }
				</div> : ''
			}
		</Fragment>
	)
}
Item.propTypes = {
	title: PropTypes.string,
	src: PropTypes.string,
	position: PropTypes.oneOf([ 'bottomleft', 'bottomright', 'topleft', 'topright', 'middle' ])
}

Item.defaultProps = {
	title: 'Carousel Title',
	position: null
}

function Carousel(props) { 

	const [ slideIndex, setSlideIndex ] = useState(0)
	const [ effectSlide, setEffectSlide ] = useState()
	const plusDivs = n => {
		setEffectSlide( n > 0 ? 'w3-animate-right': 'w3-animate-left')
		let length = props.children.length
		if (slideIndex + n > length -1) { setSlideIndex(0) }
		else if (slideIndex + n < 0) { setSlideIndex(length-1) }
		else { setSlideIndex(slideIndex + n) }
	}

	return (
		<div className="w3-content w3-display-container">
			{ 
			props.children.map((each, key) => 
				<div key={key} className={`w3-display-container ${ slideIndex === key ? effectSlide : 'w3-hide' }`}>
					{ each }
				</div>
			) 
			}
			<button className="w3-button w3-display-left w3-black" onClick={ e => plusDivs(-1) }>&#10094;</button>
			<button className="w3-button w3-display-right w3-black" onClick={ e => plusDivs(1) }>&#10095;</button>

		</div>
	)
}

Carousel.propTypes = {
	slideIndex: PropTypes.number,
	children: PropTypes.array
}


export { Carousel, Item };