//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Styles
import './UserTableItem.scss';

const UserTableItem = ({ user }) => {
	const {
		id,
		first_name,
		last_name,
		email,
		gender,
		ip_address,
		total_page_views,
		total_clicks,
	} = user;

	return (
		<tr className="user-table_row">
			<td aria-label="Id">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{id}</Link>
			</td>
			<td aria-label="First name">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{first_name}</Link>
			</td>
			<td aria-label="Last name">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{last_name}</Link>
			</td>
			<td aria-label="Email">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{email}</Link>
			</td>
			<td aria-label="Gender">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{gender}</Link>
			</td>
			<td aria-label="IP address">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{ip_address}</Link>
			</td>
			<td aria-label="Total clicks">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{total_clicks}</Link>
			</td>
			<td aria-label="Total page views">
				<Link to={`/user/${id}?from=2019-10-01&to=2019-10-07`}>{total_page_views}</Link>
			</td>
		</tr>
	);
};

UserTableItem.propTypes = {
	user: PropTypes.exact({
		id: PropTypes.number.isRequired,
		first_name: PropTypes.string.isRequired,
		last_name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
		ip_address: PropTypes.string.isRequired,
		total_clicks: PropTypes.number.isRequired,
		total_page_views: PropTypes.number.isRequired,
	}).isRequired,
};

export default UserTableItem;
