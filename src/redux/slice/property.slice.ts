import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProperty } from '../../pages/Property';

const initialState: IProperty[] = []

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setProperty: (state, action: PayloadAction<IProperty[]>) => {
      return action.payload
    },
  },
});

export const { setProperty } = propertySlice.actions;
export default propertySlice.reducer;
