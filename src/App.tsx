import React from "react";
import { initialDay } from "./constants/constants";
import CurrentDay from "./shared/components/currentDay/currentDay";

function App() {
  return (
    <div className="App">
      <CurrentDay day={initialDay} />
    </div>
  );
}

export default App;
