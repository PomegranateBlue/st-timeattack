import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";

// prop drilling 브랜치
function App() {
  return (
    <AppContainer>
      <h2>[내배캠] 스탠다드반 프로젝트 - Prop Drilling 예제</h2>
      <Content>
        <StateControl />
        <DeepStructure>
          <Level1 />
        </DeepStructure>
      </Content>
    </AppContainer>
  );
}

export default App;
