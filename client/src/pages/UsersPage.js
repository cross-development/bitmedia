//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { UsersTable } from 'components/Users';
import { Loader } from 'components/Commons';
//Packages
import queryString from 'query-string';
//Redux
import { userOperations, userHooks } from 'redux/user';

const UsersPage = () => {
	const location = useLocation();
	const users = userHooks.useGetUsers();
	const loading = userHooks.useGetLoading();

	const getAllUsers = userHooks.useUserAction(userOperations.getAllUsers);

	const parsed = queryString.parse(location?.search);
	const count = parsed.count;
	const page = parsed.page;

	useEffect(() => {
		getAllUsers({ count, page });
	}, [count, getAllUsers, page]);

	return (
		<div>
			{loading && <Loader onLoad={loading} />}

			{users && <UsersTable users={users.results} />}
		</div>
	);
};

export default UsersPage;
