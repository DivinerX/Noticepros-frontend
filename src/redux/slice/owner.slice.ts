import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OwnerState {
  ID?: string;
  firstName: string;
  lastName: string;
  businessName: string;
  streetAddress: string;
  city: string;
  unit: string;
  state: string;
  code: string;
  county: string;
  phone: string;
  email: string;
}

const initialState: OwnerState = {
  firstName: '',
  lastName: '',
  businessName: '',
  streetAddress: '',
  unit: '',
  city: '',
  state: 'California',
  code: '',
  county: '',
  phone: '',
  email: '',
};

const landlordSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    setOwner: (state, action: PayloadAction<OwnerState>) => {
      state = { ...state, ...action.payload }
    },
  },
});

export const { setOwner } = landlordSlice.actions;
export default landlordSlice.reducer;
