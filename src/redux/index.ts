import { configureStore } from '@reduxjs/toolkit';
// import ownerReducer from './slice/owner.slice';
import authReducer from './slice/auth.slice';
import propertyReducer from './slice/property.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
