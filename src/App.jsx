import { useState } from "react";
import "./App.css";
import GetStarted from "./Components/GetStarted";
import Feedback from "./Components/Feedback";
import Onboarding from "./Components/Onboarding";
import '@questlabs/react-sdk/dist/style.css'


function App() {
  const [component, setComponent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {component === "GetStarted" && <GetStarted  setComponent={setComponent}/>}
      {component === "Feedback" && (
        <Feedback isOpen={isOpen} setIsOpen={setIsOpen} setComponent={setComponent} />
      )}
      {component === "Onboarding" && <Onboarding setComponent={setComponent} />}

      {!component && (
        <>
          <button onClick={() => setComponent("GetStarted")}>GetStarted</button>
          <button
            onClick={() => {
              setIsOpen((prev) => true);
              setComponent("Feedback");
            }}
          >
            Feedback
          </button>
          <button onClick={() => setComponent("Onboarding")}>Onboarding</button>
        </>
      )}
    </div>
  );
}

export default App;
