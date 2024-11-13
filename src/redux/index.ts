import { configureStore } from '@reduxjs/toolkit';
import ownerReducer from './slice/owner.slice';
import authReducer from './slice/auth.slice';
// import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    owner: ownerReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
