import React from "react";
import "./App.css";
import BarChart from "./component/Bar/BarChart";
import Header from "./component/Header";
import Main from "./component/Main";
import SideDrawer from "./component/SideBar/SideDrawer";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      {/* <Header />
      <SideDrawer />
      <BarChart /> */}
      <Main />
    </AppProvider>
  );
}

export default App;
