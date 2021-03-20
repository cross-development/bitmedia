//Core
import React from 'react';
//Assets
import data from 'assets/data.png';
import ready from 'assets/ready.png';
import design from 'assets/design.png';
//Styles
import './MainSection.scss';

const MainSection = () => (
	<section className="main-section">
		<div className="main-info_wrapper">
			<h2 className="main-info_title">
				Why <span className="main-info_title-bold">small business owners love</span> AppCo?
			</h2>
			<p className="main-info_subtitle">
				Our design projects are fresh and simple and will benefit your business greatly. Learn more
				about our work!
			</p>
		</div>

		<ul className="feature-list">
			<li className="feature-item">
				<img src={design} alt="Clean Design" className="feature-item_img" />
				<h3 className="feature-item_title">Clean Design</h3>
				<p className="feature-item_desc">
					Increase sales by showing true dynamics of your website.
				</p>
			</li>

			<li className="feature-item">
				<img src={data} alt="Secure Data" className="feature-item_img" />
				<h3 className="feature-item_title">Secure Data</h3>
				<p className="feature-item_desc">
					Build your online store’s trust using Social Proof & Urgency.
				</p>
			</li>

			<li className="feature-item">
				<img src={ready} alt="Retina Ready" className="feature-item_img" />
				<h3 className="feature-item_title">Retina Ready</h3>
				<p className="feature-item_desc">
					Realize importance of social proof in customer’s purchase decision.
				</p>
			</li>
		</ul>
	</section>
);

export default MainSection;
