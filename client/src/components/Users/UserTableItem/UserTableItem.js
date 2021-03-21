//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Styles
import './UserTableItem.scss';

const UserTableItem = ({ user }) => {
	const { id, first_name, last_name, email, gender, ip_address } = user;

	return (
		<tr className="user-table_row">
			<td aria-label="Id">
				<Link to={`/user/${id}`}>{id}</Link>
			</td>
			<td aria-label="First name">
				<Link to={`/user/${id}`}>{first_name}</Link>
			</td>
			<td aria-label="Last name">
				<Link to={`/user/${id}`}>{last_name}</Link>
			</td>
			<td aria-label="Email">
				<Link to={`/user/${id}`}>{email}</Link>
			</td>
			<td aria-label="Gender">
				<Link to={`/user/${id}`}>{gender}</Link>
			</td>
			<td aria-label="IP address">
				<Link to={`/user/${id}`}>{ip_address}</Link>
			</td>
			<td aria-label="Total clicks">
				<Link to={`/user/${id}`}>{ip_address}</Link>
			</td>
			<td aria-label="Total page views">
				<Link to={`/user/${id}`}>{ip_address}</Link>
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
	}).isRequired,
};

export default UserTableItem;
