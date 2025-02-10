import { useState } from "react";

import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";
import { MessageContext } from "./context/messageContext";
// prop drilling 브랜치
function App() {
  const [message, setMessage] = useState("");
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <AppContainer>
        <h2>[내배캠] 스탠다드반 프로젝트 - Prop Drilling 예제</h2>
        <Content>
          <StateControl />
          <DeepStructure>
            <Level1 />
          </DeepStructure>
        </Content>
      </AppContainer>
    </MessageContext.Provider>
  );
}

export default App;
