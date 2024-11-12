import { configureStore } from '@reduxjs/toolkit';
import landlordReducer from './slice/owner.slice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    landlord: landlordReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
