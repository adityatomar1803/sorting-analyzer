import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import bubble from "../SortingAlgos/Bubble";
import { demoBarChart, numbers } from "./DemoBarChart";
import YetAnotherChart from "./YetAnotherChart";

const BarChart = () => {
  const { state } = useContext(AppContext);
  const [play, setPlay] = useState(false);
  const [finalNumbers, setFinalBar] = useState(() => numbers(state.range));
  // const [finalBar, setFinalBar] = useState(() => demoBarChart(state.range));

  // function setBar(new_bar) {
  //   console.log("setBar ran");
  //   setFinalBar((prev) => new_bar);
  // }

  useEffect(() => {
    setFinalBar(numbers(state.range));
  }, [state.range]);

  console.log("the state is ", finalNumbers);

  // function onPlayClick() {
  // let demoBar = finalBar.slice();

  // setPlay((prev) => !prev);

  // bubble(demoBar, setBar);
  // }

  return (
    <div className="closingDiv">
      <div className="barDiv">
        <YetAnotherChart demoBar={finalNumbers.slice()} sort={play} />
      </div>
      <button className="btn" onClick={() => setPlay((prev) => !prev)}>
        {play ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default BarChart;
