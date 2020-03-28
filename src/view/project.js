import React, { useState } from 'react'
import { GistdaMap, Fis, AIP } from './Project'
const Project = (props) => {
	const [ page, setPage ] = useState(GistdaMap)
	const [ active, setActive ] = useState('gistda')
	const changeTab = (page, key) => {
		setPage(page)
		setActive(key)
	}

	return(
		<div className="">
			<div className="w3-bar w3-black">
				<button className={`w3-bar-item w3-button ${ active==='gistda' ? 'w3-border-bottom w3-border-orange w3-gray': ''}`} onClick={ e => changeTab(GistdaMap, 'gistda') }>
					<h3>GISTDA</h3>
				</button>
				<button className={`w3-bar-item w3-button ${ active==='fis' ? 'w3-border-bottom w3-border-orange w3-gray': ''}`} onClick={ e => changeTab(Fis, 'fis') }>
					<h3>Thai Flight Information</h3>
				</button>
				<button className={`w3-bar-item w3-button ${ active==='aip' ? 'w3-border-bottom w3-border-orange w3-gray': ''}`} onClick={ e => changeTab(AIP, 'aip') }>
					<h3>AIP</h3>
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