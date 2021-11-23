import React from "react";
import CurrentDay from "./shared/components/currentDay/currentDay";
import {CssBaseline} from "@mui/material";
import {useTypesSelector} from "./hooks/useTypesSelector";

function App() {
    const {initialDay} = useTypesSelector(state => state.apiReducer)
  return (
    <div className="App">
        <CssBaseline/>
      <CurrentDay myDay={initialDay} />
    </div>
  );
}

export default App;
