import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

//slice에서 action Name, reducer를 전부 선언
//슬라이스는 action
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = state.message + action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
