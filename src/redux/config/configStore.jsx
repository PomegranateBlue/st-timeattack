import { configureStore } from "@reduxjs/toolkit";
//combineReducer + createStore를  합쳐 configureStore로 사용
import message from "../slices/messageSlice";

const store = configureStore({
  reducer: { messageModule: message },
});
//store에서는 모듈을 연결
export default store;
