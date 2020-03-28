import React, { useState } from 'react'
import { GistdaMap, Fis } from './Project'
const Project = (props) => {
	const [ page, setPage ] = useState(GistdaMap)
	const changeTab = (page) => {
		setPage(page)
	}

	return(
		<div className="">
			<div className="w3-bar w3-black">
				<button className="w3-bar-item w3-button" onClick={ e => changeTab(GistdaMap) }>
					<h3>GISTDA</h3>
				</button>
				<button className="w3-bar-item w3-button" onClick={ e => changeTab(Fis) }>
					<h3>Thai Flight Information</h3>
				</button>
				<button className="w3-bar-item w3-button" onClick={ e => changeTab() }>
					<h3>Tokyo</h3>
				</button>
			</div>
	
			<div>
				{ page }
			</div>
	
		</div>
	)
}

Project.defaultProps = {
	no: 0
}

export default Project