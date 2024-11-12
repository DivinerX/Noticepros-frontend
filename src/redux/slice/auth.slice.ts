import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  ID?: string;
  FirstName: string;
  LastName: string;
  Role: string;
  BusinessName?: string;
  Address: string;
  City: string;
  Unit?: string;
  State: string;
  Code: string;
  County: string;
  TelePhone: string;
  TelePhoneCell: string;
  TelePhoneFax: string;
  Email1: string;
  Email2?: string;
}

const initialState: IAuthState = {
  FirstName: '',
  LastName: '',
  Role: '',
  BusinessName: '',
  Address: '',
  Unit: '',
  City: '',
  State: 'California',
  Code: '',
  County: '',
  TelePhone: '',
  TelePhoneCell: '',
  TelePhoneFax: '',
  Email1: '',
  Email2: '',
};

const landlordSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthState>) => {
      state = { ...state, ...action.payload }
    },
  },
});

export const { setUser } = landlordSlice.actions;
export default landlordSlice.reducer;
