import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todoSlice from './listSlice';
import {useDispatch} from 'react-redux';
import commonSlice from './commonSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    todoList: todoSlice,
    common: commonSlice,
    users: userSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
