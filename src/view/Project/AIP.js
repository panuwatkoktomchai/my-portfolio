import React from 'react'
import { Carousel, Item } from 'components/Carousel'

const AIP = (props) => (
	<div className="w3-container w3-text-white w3-margin me-font">

		<div className="project-item">
			<div className="w3-margin-left">
				<h2 className="me-font">AIP </h2>
				<p className="me-text me-tab-space">Thailand Aeronautical Information Service (AIS) Redesigned CAAT website and develop content management system.</p>
			</div>
			
			<h3 className="me-font w3-leftbar w3-border-blue"> &nbsp;&nbsp;WebSite : <a target="__blank" href="https://ais.caat.or.th/">www.ais.caat.or.th</a></h3>
			<Carousel>
				<Item
				title="Piesoft 2018."
				src="https://bn1303files.storage.live.com/y4paxZaSK27eCjPoVB2K6L_1Z6jIUPzCdpgJu6MrFZzTdiY9uCIfl1vzikeEEz7xuvvOELPLiT-TWgLbNWUJE1LNhIaZGMSuO6mVIxgLj-VNLth54iG3I-iAwfjqnTbj41S6E_PDRkRgsIdQgTrBfMuY2vFSHOdHDmylNe93UvmZkFS82o3pgtWetqXBPdTyKONQF8zSYGdyCqzYrP8aZlvpaxvEPvxJqwcnDehk3dW4RU/Screenshot%20from%202020-03-28%2022-57-17.png?psid=1&width=1805&height=941"
				position="bottomright"
				/>
				<Item
				title="Piesoft 2018."
				src="https://bn1303files.storage.live.com/y4pgUs_8gPPLDWOnW0iLnvUlTJfdsziZqKlMCwv2SL48z_bWS1NC3lYDUOkq48g_IxUio4ys-4qNA3s-wcCU4dLf3DUxlCT40liYqYZlBYBoGGRK4bXaCTK5TzKldjUzdomf1IerGAO-LCcfvOFDnTaWTxKeULFvbhxzCN904kg5BAZHmbfTt35gd2sMva5WICH4IAOJrW7CYkBbY10peO5E1RPg4BLLO78ibnYy6aTK3c/Screenshot%20from%202020-03-28%2022-58-03.png?psid=1&width=1802&height=941"
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
							<span className="w3-tag w3-orange"> 
							<a target="__blank" href="https://laravel.com/">Laravel Framework 5.6 </a>
							</span>
						</td>
						<td> - </td>
					</tr>
					<tr>
						<td> <b>Back-end[CMS]</b> </td>
						<td>
						<span className="w3-tag w3-red"> <a target="__blank" href="https://laravel.com/">Laravel Framework 5.6 </a> </span>
						</td>
						<td> - </td>
					</tr>
					<tr>
						<td> <b> API </b> </td>
						<td>
						<span className="w3-tag w3-blue"> <a target="__blank" href="https://laravel.com/">Laravel Framework 5.6 </a> </span>
						</td>
						<td> - </td>
					</tr>
					<tr>
						<td><b>Database</b></td>
						<td>
							<span className="w3-tag w3-green w3-margin-right"> 
								Mysql
							</span>
						</td>
						<td>MySQL is an open-source relational database management system (RDBMS). </td>
					</tr>
					<tr>
						<td> <b>Other</b> </td>
						<td>
							<span className="w3-tag w3-teal">
								<a href="https://crontab.guru/">Crontab</a>
							</span>
						</td>
						<td> Job scheduler sync data from various service providers</td>
					</tr>
				</tbody>
			</table>
			</div>

		</div>  {/** End tag each a Project */}

	</div>
)

AIP.defaultProps = {
	no: 0
}

export default AIP