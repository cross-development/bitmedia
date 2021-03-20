//Core
import React from 'react';
import PropTypes from 'prop-types';

const UsersTable = ({ users }) => {
	return (
		<div>
			{users.map(user => (
				<p key={user.id}>{user.first_name}</p>
			))}
		</div>
	);
};

UsersTable.propTypes = {};

export default UsersTable;
