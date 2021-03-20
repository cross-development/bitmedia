//Core
import { createAction } from '@reduxjs/toolkit';

const getUsersRequest = createAction('user/getUsersRequest');
const getUsersSuccess = createAction('user/getUsersSuccess');
const getUsersFailure = createAction('user/getUsersFailure');

const getStatByUserIdRequest = createAction('user/getStatByUserIdRequest');
const getStatByUserIdSuccess = createAction('user/getStatByUserIdSuccess');
const getStatByUserIdFailure = createAction('user/getStatByUserIdFailure');

const userActions = {
	getUsersRequest,
	getUsersSuccess,
	getUsersFailure,

	getStatByUserIdRequest,
	getStatByUserIdSuccess,
	getStatByUserIdFailure,
};

export default userActions;
