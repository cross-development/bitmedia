//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Assets
import mobile from 'assets/mobile.png';
//Styles
import './HeaderSection.scss';

const HeaderSection = () => (
	<section className="header-section">
		<div className="head-info_wrapper">
			<h1 className="head-info_title">
				<span className="head-info_title-bold">Brainstorming </span>
				for desired perfect Usability
			</h1>

			<p className="head-info_subtitle">
				Our design projects are fresh and simple and will benefit your business greatly. Learn more
				about our work!
			</p>

			<button className="head-info_button">
				<Link to="/user">Views Stats</Link>
			</button>
		</div>

		<div className="head-mobile_wrapper">
			<img src={mobile} alt="mobile" />
		</div>
	</section>
);

export default HeaderSection;
