import React from 'react'

const Project = (props) => (
	<div className="w3-container w3-text-white w3-margin me-font">
		<div className="w3-margin-left">
			<h2 className="me-font">GISTDA (Story of civilization)</h2>
			<p className="me-text me-tab-space">Geo-Informatics and Space Technology Development Agency. Developed website and service to manage and show geolocation such as historical location.</p>
		</div>
		<button onclick="myFunction('Demo1')" class="w3-btn w3-block w3-black w3-left-align">Open Section 1</button>
		<div id="Demo1" class="w3-container">
			<h4>Section 1</h4>
			<p>Some text..</p>
		</div>
	</div>
)

Project.defaultProps = {
	no: 0
}

export default Project