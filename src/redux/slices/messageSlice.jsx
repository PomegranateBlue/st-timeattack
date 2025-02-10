import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

//slice에서 action Name, reducer를 전부 선언
//슬라이스는 action
const messageSlice = createSlice({
  name: "messageModule", //모듈의 이름, 리덕스와 마찬가지로 모듈이라고 명시하자
  initialState, // 초기 상태 값을 내부에 포함
  reducers: {
    // 리듀서를 슬라이스 내부에서 선언
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
