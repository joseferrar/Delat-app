import {createSlice} from '@reduxjs/toolkit';

type CommonState = {
  isModal: boolean;
  loading: boolean;
};

const initialState: CommonState = {
  isModal: false,
  loading: false,
};

const commonSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state: CommonState, {payload}) => {
      state.isModal = payload;
    },
    IsLoading: (state: CommonState, {payload}) => {
      state.loading = payload;
    },
  },
});

export default commonSlice.reducer;
export const {showModal, IsLoading} = commonSlice.actions;
