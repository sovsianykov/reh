import React from "react";
import {CssBaseline} from "@mui/material";
import Routing from './Routing/Routing';
import Navbar from "./components/Navbar/Navbar";

const  App = () => {
  return (
      <div>
    <Routing/>
        <CssBaseline/>

      </div>
  );
}

export default App;
