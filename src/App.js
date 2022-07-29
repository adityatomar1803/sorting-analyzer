import React from "react";
import "./App.css";
import Main from "./component/Main";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
