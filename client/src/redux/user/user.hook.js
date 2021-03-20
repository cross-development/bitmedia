//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useGetUsers = getConnectedStore('users');
const useGetUserStats = getConnectedStore('userStats');
const useGetLoading = getConnectedStore('loading');

const useUserAction = getConnectedActionHook();
const useUserEmptyAction = getConnectedEmptyActionHook();

const userHooks = {
	useGetUsers,
	useGetUserStats,
	useGetLoading,
	useUserAction,
	useUserEmptyAction,
};

export default userHooks;
