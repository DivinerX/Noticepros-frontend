import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITenant } from '../../pages/Tenant';

const initialState: ITenant[] = []

const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    setTenant: (state, action: PayloadAction<ITenant[]>) => {
      return action.payload
    },
  },
});

export const { setTenant } = tenantSlice.actions;
export default tenantSlice.reducer;
