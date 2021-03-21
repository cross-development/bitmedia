//Core
import React, { useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
//Components
import { Loader } from 'components/Commons';
import { StatInfo } from 'components/UserStat';
//Redux
import { userHooks, userOperations } from 'redux/user';
//Packages
import queryString from 'query-string';

const UserStatPage = () => {
	const { id } = useParams();
	const location = useLocation();

	const users = userHooks.useGetUsers();
	const userStat = userHooks.useGetUserStats();
	const loading = userHooks.useGetLoading();

	const parsed = queryString.parse(location.search);
	const fromDate = parsed.from;
	const toDate = parsed.to;

	const getUserStat = userHooks.useUserAction(userOperations.getStatByUserId);

	useEffect(() => {
		getUserStat({ id, fromDate, toDate });
	}, [fromDate, getUserStat, id, toDate]);

	const timeLine = useMemo(
		() =>
			userStat.map(({ date }) =>
				new Date(date).toLocaleDateString('ua-UA', {
					day: 'numeric',
					month: 'numeric',
					year: '2-digit',
				}),
			),
		[userStat],
	);

	const statViews = useMemo(() => userStat.map(({ page_views }) => page_views), [userStat]);
	const statClicks = useMemo(() => userStat.map(({ clicks }) => clicks), [userStat]);
	const user = useMemo(() => users && users.results.find(user => user.id === Number(id)), [
		id,
		users,
	]);

	return (
		<>
			{loading && <Loader onLoad={loading} />}

			{userStat.length > 0 && (
				<StatInfo
					currentUser={user}
					timeLine={timeLine}
					statViews={statViews}
					statClicks={statClicks}
				/>
			)}
		</>
	);
};

export default UserStatPage;
