import { createSlice } from '@reduxjs/toolkit';

export const planSlice = createSlice({
  name: 'plan',
  initialState: {
    name: '',
    price: '',
    description: [''],
    age: 0,
  },
  reducers: {
    setCurrentPlan: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentPlan } = planSlice.actions;

export default planSlice.reducer;
