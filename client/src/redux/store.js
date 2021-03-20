//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import { userReducers } from './user';

const store = configureStore({ reducer: userReducers });

export default store;
