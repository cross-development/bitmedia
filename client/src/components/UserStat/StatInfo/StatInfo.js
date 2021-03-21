//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import User from '../User';
import StatChart from '../StatChart';
//Styles
import './StatInfo.scss';

const StatInfo = ({ currentUser, timeLine, statClicks, statViews }) => (
	<div className="stat-wrap">
		<User currentUser={currentUser || ''} />

		<StatChart timeLine={timeLine} data={statClicks} title="Clicks" />

		<StatChart timeLine={timeLine} data={statViews} title="Views" />
	</div>
);

StatInfo.defaultProps = {
	currentUser: {},
};

StatInfo.propTypes = {
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

export default StatInfo;
