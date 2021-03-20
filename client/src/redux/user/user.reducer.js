//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import userActions from './user.action';

const users = createReducer(null, {
	[userActions.getUsersSuccess]: (state, { payload }) => payload,
});

const userStats = createReducer([], {
	[userActions.getStatByUserIdSuccess]: (state, { payload }) => payload,
});

const error = createReducer(null, {
	[userActions.getUsersFailure]: (state, { payload }) => payload,
	[userActions.getStatByUserIdFailure]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
	[userActions.getUsersRequest]: () => true,
	[userActions.getUsersSuccess]: () => false,
	[userActions.getUsersFailure]: () => false,

	[userActions.getStatByUserIdRequest]: () => true,
	[userActions.getStatByUserIdSuccess]: () => false,
	[userActions.getStatByUserIdFailure]: () => false,
});

export default combineReducers({ users, userStats, error, loading });
