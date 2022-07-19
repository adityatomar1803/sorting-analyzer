import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import BarChart from "./Bar/BarChart";
import Header from "./Header";
import SideDrawer from "./SideBar/SideDrawer";

const Main = () => {
  const { state } = useContext(AppContext);
  const [shouldReset, setReset] = useState(false);

  function resetChart() {
    let collection = document.getElementsByClassName("scraper");
    for (let i = 0; i < state.numbers.length; i++) {
      collection[i].style.backgroundColor = "pink";
    }
  }
  return (
    <>
      <Header />
      <SideDrawer
        shouldReset={shouldReset}
        setReset={setReset}
        resetChart={resetChart}
      />
      <BarChart setReset={setReset} />
    </>
  );
};

export default Main;
