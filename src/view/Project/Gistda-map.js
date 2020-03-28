import React from 'react'
import { Carousel, Item } from 'components/Carousel'

const GistdaMap = (props) => (
	<div className="w3-container w3-text-white w3-margin me-font">

		<div className="project-item">
			<div className="w3-margin-left">
				<h2 className="me-font">GISTDA (Story of civilization)</h2>
				<p className="me-text me-tab-space">Geo-Informatics and Space Technology Development Agency. Developed website and service to manage and show geolocation such as historical location.</p>
			</div>
			
			<h3 className="me-font w3-leftbar w3-border-blue"> &nbsp;&nbsp;Example web page (Under development)</h3>
			<Carousel>
				<Item
				title="Piesoft 2019 - 2020"
				src="https://bn1303files.storage.live.com/y4pqfTLRgbXwpTla3Md2QF5r-IQFW0vORg8y5gxzpf0K9eCE0ZEv7QhWVJCxJaR-9I0Te_Um6cQ4U-Jdu42GABjucUlItZEqdBPH2kYHcB7mvSjAcRHsjj0_987ytB2KqZhsRA9fjUFhRFHogJ5yRPr3H0tpsO5LTFQ9S-61A2VnDHp8kPsD1SxvvjhjJdoug7SqaUV9Wbqt2cwDgJT0m2mqeJVr7OaK9SWjQoguLqb6Co/Screenshot%20from%202020-03-28%2017-10-27.png?psid=1&width=1811&height=941"
				position="bottomright"
				/>
				<Item
				title="Piesoft 2019 - 2020"
				src="https://bn1303files.storage.live.com/y4pjzXiDV6nOQiPNKrkN4nEsSRL6N_Hxcuz0ndENWykrdhbiT1PGHhPNWzYkBrWZxuavbuSgFx4-DwA8TI8LMm0zPQIxhzZHow6tNVtAO8BBzt0eRJJIq8A1o5dEUCQehQwtTN61KOEwrMtK83TXmgXo8SBYV_HDgH7i8dfOWqozMfpG3ldYZ39RS_8n1Usz2G0doNWwXwgBP57iL1CKJu5Pyn52htmszbaogDjrtQKZq0/Screenshot%20from%202020-03-28%2017-56-54.png?psid=1&width=1714&height=892"
				position="bottomright"
				/>
				<Item
				title="Piesoft 2019 - 2020"
				src="https://bn1303files.storage.live.com/y4pZ0mmXQbczl1n42vJMgLNzhC6i4HEYgFoMKcpa_TULMa_EIIqT3sCxuc47bG2YI3Z7ns3bE-2RTVJWePvnrvyDFupMr3PTHc1vXKbxpR0dfT0PCeJWbHPtUibdosiuSreO_znETf_rEu6IEXKmkWkC7reje_PIPh1RRrRqxG6Ob3eAmSCZ7VjDnrw9dwG640UHhX7D6ecY8kx1Eco4TcYFV-_2KJWulqShJqjkZlVbqE/Screenshot%20from%202020-03-28%2018-51-00.png?psid=1&width=1713&height=892"
				position="bottomright"
				/>
				<Item
				title="Piesoft 2019 - 2020"
				src="https://bn1303files.storage.live.com/y4pbI1YlXC9RWVdqnXRVbzld4wlrTEaWmPqVDb71_Ve1l1Y7sdNd46eXEF7FnrNFj3bnSV7ozGB2N5Q36PO9Bqklg6-DN2S4oa4u3EqQASqZvgP0_zVxH1bSNlkl-zVmmqYeah_N9MTO3U9Pki0x6pJEPalcyivIDbqIquGpWDnSHbJTJorG_iFHVRQOO8LbGetklI6F6jUYpfKdfU4_MFHKiWuyEukJNns1iPH7N8Z_eE/Screenshot%20from%202020-03-28%2019-16-17.png?psid=1&width=1713&height=892"
				position="bottomright"
				/>
			</Carousel>

			<h2 className="me-font"> Architecture structure </h2>
			<div className="w3-margin me-font" style={{ fontSize: '16pt'}}>
			<table className="w3-table w3-black-transparent w3-hoverable">
				<tbody className="w3-margin">
					<tr className="">
						<td><b>Front-end</b></td>
						<td>
							<span className="w3-tag w3-orange w3-margin-right"> 
								<a target="__blank" href="https://nextjs.org/">Nextjs</a>
							</span>
							<span className="w3-tag w3-orange"> 
								<a target="__blank" href="https://reactjs.org/">React</a>
							</span>
						</td>
						<td> The React Framework for SEO Friendly Site, PWAs Static Website, Lightweight Apps</td>
					</tr>
					<tr>
						<td><b>Storage</b></td>
						<td>
							<span className="w3-tag w3-green w3-margin-right"> 
								OwnCloud
							</span>
						</td>
						<td>A suite of client–server software for creating and using file hosting services. </td>
					</tr>
					<tr>
						<td> <b>Other</b> </td>
						<td>
							<span className="w3-tag w3-teal">
								<a href="https://openlayers.org/">Openlayers</a>
							</span>
						</td>
						<td>A high-performance, feature-packed library for mapping</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<span className="w3-tag w3-teal">
								<a href="https://aframe.io/">AFrame</a>
							</span>
						</td>
						<td>A web framework for building virtual reality experiences</td>
					</tr>
				</tbody>
			</table>
			</div>

		</div>  {/** End tag each a Project */}
		<br/>
		<hr/>
		<br/>

		<div className="project-item w3-margin-top">
			<div className="w3-margin-left">
				<h2 className="me-font">GISTDA (Suvarnabhumi app)</h2>
			</div>
			<h3 className="me-font w3-leftbar w3-border-blue"> &nbsp;&nbsp;WebSite : <a target="__blank" href="https://suvarnabhumimap.gistda.or.th">suvarnabhumimap.gistda.or.th</a></h3>
			<Carousel>
				<Item
				title="Piesoft 2018 - 2019"
				src="https://bn1303files.storage.live.com/y4pJjOFEGOR-_gumvvIG_UjR8xATXOXsUL4YsQ4JYDGo51apUwA7d8dsHL1F_NJ_BRFxjVfc4UzCQYJFJzlW5RAliQZZcAa0ujh30L5V12xxBPj0HbLR1x5J3zCV1xesstepZpt9WSKGgfGtQl3hvAfs1SbATV2KO5enKYwMODvfJ301xEwjGd8KcDzpzrVB7_rCrHHxwtFA-8bUAH8uG6MFqmjPuO6twHSWTYhVzfZ5iw/Screenshot%20from%202020-03-28%2021-24-31.png?psid=1&width=1805&height=941"
				position="bottomright"
				/>
				<Item
				title="Piesoft 2018 - 2019"
				src="https://bn1303files.storage.live.com/y4pVk4rVeXxJtYvVmBejZNxoxpNGLlg5Xv0GCHrEzmQ4BwRGIWfBFdOEry7K_4Fos6LOLnyW6D-qOMDQjWZPMw-jJZT9bOEPb8TW2J8VlstMWtIhPL_hNH0Yoq3FneIhQ5hwoFrNdFlIGc-sj0Dpy8RCNs82qdInKRzcJ2IVTCgf2Zi_Wn-mbhE8wlvB-YJdNWSYRekfRiE-8K7kpELoQdtBccvSnf5bwcFZp5EDbqywP8/Screenshot%20from%202020-03-28%2021-20-34.png?psid=1&width=1814&height=941"
				position="bottomright"
				/>
				<Item
				title="Piesoft 2018 - 2019"
				src="https://bn1303files.storage.live.com/y4p6WRKl6J27uJjAsu4XptFxoNGFLlX5IEkdbHIUHw2mezNr_n3IlzFRu2zRuXF7MjRyuO0rVy-j2vkPizKCjWHZoCWpWXbrlMnX_DSEE71m3Ft6GvWWZ_I3DMam9y5c3OgcEJA0nVOtzx7bjWwtq-nujt8VEY32--xaWCYudv5yjT1pbWyx9Bnit8egkGB0dSNFoxQQKr5n1PlTfDD6ihuzk9emdID_HzypGlt-vrWixM/Screenshot%20from%202020-03-28%2021-23-16.png?psid=1&width=1805&height=941"
				position="bottomright"
				/>
			</Carousel>

			<h2 className="me-font"> Architecture structure </h2>
			<div className="w3-margin me-font" style={{ fontSize: '16pt'}}>
			<table className="w3-table w3-black-transparent w3-hoverable">
				<tbody className="w3-margin">
					<tr className="">
						<td><b>Front-end</b></td>
						<td>
							<span className="w3-tag w3-orange w3-margin-right"> 
								<a target="__blank" href="https://nextjs.org/">HTML5, Javascript, Jquery, css</a>
							</span>
						</td>
						<td> - </td>
					</tr>
					<tr>
						<td><b>Service</b></td>
						<td>GEO server</td>
						<td></td>
					</tr>
					<tr>
						<td> <b>Other</b> </td>
						<td>
							<span className="w3-tag w3-teal">
								<a href="https://openlayers.org/">Openlayers</a>
							</span>
						</td>
						<td>A high-performance, feature-packed library for mapping</td>
					</tr>
				</tbody>
			</table>
			</div>
		</div> {/** End tag each a Project */}

	</div>
)

GistdaMap.defaultProps = {
	no: 0
}

export default GistdaMap