import { createStore } from "redux";
//Redux 스토어를 생성하는 함수
import { combineReducers } from "redux";
//여러개의 리듀서를 하나로 합치는 함수
import messageReducer from "../modules/messageModule";
//모듈에서 가져온 리듀서
const rootReducer = combineReducers({
  /*로직을 작성 */
  messageModule: messageReducer,
  //모듈에서 가져온 리듀서를 명칭할 때는 -module을 붙이기
  //컴포넌트에서 사용 시에는 해당 모듈의 리듀서를 사용하는 것임을 명시
  //state.messageModule.message
});
const store = createStore(rootReducer);

export default store;
