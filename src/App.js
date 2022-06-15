import React from "react";
import "./App.css";
import BarChart from "./component/Bar/BarChart";
import Header from "./component/Header";
import SideDrawer from "./component/SideBar/SideDrawer";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Header />
      <SideDrawer />
      <BarChart />
    </AppProvider>
  );
}

export default App;
