//Core
import React, { useState } from 'react';
//Styles
import './FooterSection.scss';

const FooterSection = () => {
	const [state, setState] = useState('');

	const handleChange = ({ target: { value } }) => setState(value);

	const handleSubmit = e => {
		e.preventDefault();
		alert(`You subscribed with email: ${state}`);
	};

	return (
		<section className="footer-section">
			<form onSubmit={handleSubmit} className="footer-form">
				<label className="footer-form_label">
					<input
						type="text"
						value={state}
						autoComplete="off"
						className="footer-form_input"
						placeholder="Enter your email"
						onChange={handleChange}
					/>
				</label>

				<button type="submit" className="footer-form_button">
					Subscribe
				</button>
			</form>
		</section>
	);
};

export default FooterSection;
