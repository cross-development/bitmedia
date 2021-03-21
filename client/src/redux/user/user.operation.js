//Core
import axios from 'axios';
//Redux
import userActions from './user.action';

//Axios defaults config
axios.defaults.baseURL = `https://morning-sierra-40406.herokuapp.com`;

const getAllUsers = ({ page = 1, count = 16 }) => dispatch => {
	dispatch(userActions.getUsersRequest());

	axios
		.get(`/api/user?count=${count}&page=${page}`)
		.then(({ data }) => dispatch(userActions.getUsersSuccess(data)))
		.catch(error => dispatch(userActions.getUsersFailure(error)));
};

const getStatByUserId = ({ id, fromDate, toDate }) => dispatch => {
	dispatch(userActions.getStatByUserIdRequest());

	axios
		.get(`/api/user/${id}?from=${fromDate}&to=${toDate}`)
		.then(({ data }) => dispatch(userActions.getStatByUserIdSuccess(data)))
		.catch(error => dispatch(userActions.getStatByUserIdFailure(error)));
};

const userOperations = {
	getAllUsers,
	getStatByUserId,
};

export default userOperations;
