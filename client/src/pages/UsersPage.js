//Core
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
//Components
import { UsersTable, UsersPagination } from 'components/Users';
import { Loader } from 'components/Commons';
//Packages
import queryString from 'query-string';
//Redux
import { userOperations, userHooks } from 'redux/user';

const UsersPage = () => {
	const history = useHistory();
	const location = useLocation();

	const users = userHooks.useGetUsers();
	const loading = userHooks.useGetLoading();

	const parsed = queryString.parse(location.search);
	const count = parsed.count;
	const page = parsed.page;

	const getAllUsers = userHooks.useUserAction(userOperations.getAllUsers);

	useEffect(() => {
		getAllUsers({ page, count });
	}, [getAllUsers, page, count]);

	const handleChangePaginate = ({ selected }) => {
		history.replace({
			pathname: location.pathname,
			search: `count=${count}&page=${selected + 1}`,
		});
	};

	return (
		<>
			{loading && <Loader onLoad={loading} />}

			{users && <UsersTable users={users.results} />}

			{users && (
				<UsersPagination totalPages={users.totalPages} onChangePaginate={handleChangePaginate} />
			)}
		</>
	);
};

export default UsersPage;
