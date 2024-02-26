import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../models/userModel';

const initialState: IUser = {
  name: '',
  lastName: '',
  birthDay: '',
  phoneNumber: '',
  typeDocument: '',
  documentNumber: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    currentUser: (state, action) => {
      const newUser: IUser = action.payload;
      return {...state,...newUser}
    },
  },
});

export const { currentUser } = userSlice.actions;

export default userSlice.reducer;
