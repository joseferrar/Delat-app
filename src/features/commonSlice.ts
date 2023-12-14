import {createSlice} from '@reduxjs/toolkit';

type CommonState = {
  isModal: boolean;
};

const initialState: CommonState = {
  isModal: false,
};

const commonSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state: CommonState, {payload}) => {
      state.isModal = payload;
    },
  },
});

export default commonSlice.reducer;
export const {showModal} = commonSlice.actions;
