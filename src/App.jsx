import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { SunValueSection } from "./components/SunValueSection";
import { ValueListSection } from "./components/ValueListSection";
import { useState } from "react";

function App() {
  const [moneyList, setMoneyList] = useState([]);
  return (
    <>
      <div className="App">
        <GlobalReset />
        <GlobalStyles />
        <Header />
        <div className="containner">
          <div>
            <Form setMoneyList={setMoneyList} />
            <SunValueSection moneyList={moneyList} />
          </div>
          <div>
            <ValueListSection
              setMoneyList={setMoneyList}
              moneyList={moneyList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
