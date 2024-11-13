import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  authenticated: boolean;
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
  authenticated: false,
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthState>) => {
      return { ...state, ...action.payload, authenticated: true }
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
