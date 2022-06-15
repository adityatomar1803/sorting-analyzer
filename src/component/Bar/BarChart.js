import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import { demoBarChart } from "./DemoBarChart";

const BarChart = () => {
  const { state } = useContext(AppContext);
  const [play, setPlay] = useState(false);
  const [finalBar, setFinalBar] = useState([]);

  useEffect(() => {
    setFinalBar(demoBarChart(state.range));
  }, [state.range]);

  console.log("the state is ", finalBar);

  function onPlayClick() {
    setPlay((prev) => !prev);
    for (let i = 0; i < finalBar.length - 1; i++) {
      for (let j = 0; j < finalBar.length - i - 1; j++) {
        if (
          finalBar[j].props.style.height > finalBar[j + 1].props.style.height
        ) {
          var d = finalBar[j];
          setFinalBar((prev) => [
            ...prev.slice(0, j - 1),
            prev[j + 1],
            d,
            ...prev.slice(j + 1),
          ]);
        }
      }
    }
  }

  return (
    <div className="closingDiv">
      <div className="barDiv">{finalBar}</div>
      <button className="btn" onClick={onPlayClick}>
        {play ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default BarChart;
