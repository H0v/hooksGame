import "./App.css";
import { useState } from "react";
import BtnContainer from "./components/BtnContainer";
import WonContainer from "./components/WonContainer";

function App() {
  const [finished, setFinished] = useState(false);
  const [steps, setSteps] = useState(0);

  const handlePlayAgain = () => {
    resetSteps();
    setFinished(false);
  };

  const handleSetFinished = () => {
    console.log("trigger");
    setFinished(true);
  };

  const increseSteps = () => {
    setSteps(steps + 1);
  };

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    <div className="App">
      {finished ? (
        <WonContainer steps={steps} handlePlayAgain={handlePlayAgain} />
      ) : (
        <BtnContainer
          steps={steps}
          setSteps={() => increseSteps()}
          setFinished={() => handleSetFinished()}
        />
      )}
    </div>
  );
}

export default App;
