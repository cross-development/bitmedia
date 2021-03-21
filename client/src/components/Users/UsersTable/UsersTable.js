//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Components
import UserTableItem from '../UserTableItem';
//Styles
import './UsersTable.scss';

const UsersTable = ({ users }) => (
	<div className="users-stat_wrap">
		<p className="history-line">
			<Link to="/">Main page </Link>
			&gt; <span>User statistics</span>
		</p>

		<table className="table-1">
			<caption className="table-title">Users statistics</caption>

			<thead>
				<tr>
					<th>Id</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Email</th>
					<th>Gender</th>
					<th>IP address</th>
					<th>Total clicks</th>
					<th>Total page views</th>
				</tr>
			</thead>

			<tbody>
				{users.map(user => (
					<UserTableItem key={user.id} user={user} />
				))}
			</tbody>
		</table>
	</div>
);

UsersTable.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			first_name: PropTypes.string.isRequired,
			last_name: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			gender: PropTypes.string.isRequired,
			ip_address: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default UsersTable;
