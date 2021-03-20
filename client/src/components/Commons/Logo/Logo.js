//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import './Logo.scss';

const Logo = () => (
	<div className="logo-wrapper">
		<Link to="/" className="logo-link">
			AppCo
		</Link>
	</div>
);

export default Logo;
