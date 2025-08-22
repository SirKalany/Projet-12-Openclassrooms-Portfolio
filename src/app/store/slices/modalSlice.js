import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openContact: (state) => {
      state.isOpen = true;
    },
    closeContact: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openContact, closeContact } = modalSlice.actions;
export default modalSlice.reducer;
