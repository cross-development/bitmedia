//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Styles
import './User.scss';

const User = ({ currentUser }) => (
	<div className="user-wrap">
		<p className="history-line ">
			<Link to="/">Main page </Link>
			&gt; <Link to="/user?count=16&page=1">User statistics </Link>
			&gt;{' '}
			<span className="username-line">
				{currentUser.first_name} {currentUser.last_name}
			</span>
		</p>

		<h2 className="username">
			{currentUser.first_name} {currentUser.last_name}
		</h2>
	</div>
);

User.defaultProps = {
	currentUser: {},
};

User.propTypes = {
	currentUser: PropTypes.shape({
		id: PropTypes.number,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		email: PropTypes.string,
		gender: PropTypes.string,
		ip_address: PropTypes.string,
		total_clicks: PropTypes.number,
		total_page_views: PropTypes.number,
	}),
	timeLine: PropTypes.arrayOf(PropTypes.string),
	statClicks: PropTypes.arrayOf(PropTypes.number),
	statViews: PropTypes.arrayOf(PropTypes.number),
};

export default User;
