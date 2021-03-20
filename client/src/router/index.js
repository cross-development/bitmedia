//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Main page',
		exact: true,
		private: false,
		restricted: false,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/user',
		label: 'Users statistics',
		exact: true,
		private: false,
		restricted: false,
		component: lazy(() => import('pages/UsersPage' /* webpackChunkName: "users-page"*/)),
	},
	{
		path: '/user/:id',
		label: 'User statistic',
		exact: false,
		private: false,
		restricted: false,
		component: lazy(() => import('pages/UserStatPage' /* webpackChunkName: "user-stat-page"*/)),
	},
];

export default routes;
