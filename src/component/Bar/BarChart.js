import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/AppProvider";
import { generateChart } from "../../Helpers";
import bubble from "../SortingAlgos/Bubble";
import { merge_sort } from "../SortingAlgos/Merge";
import selection from "../SortingAlgos/Selection";

const BarChart = ({ setReset }) => {
  const { state, dispatch } = useContext(AppContext);
  const [play, setPlay] = useState(false);

  const [chart, setChart] = useState(state.numbers);

  useEffect(() => {
    setChart((prev) => state.numbers);
  }, [state.numbers]);

  function onPlayClick() {
    let demoBar = state.numbers.slice();

    setPlay((prev) => !prev);

    switch (state.algo) {
      case "bubble":
        bubble(demoBar, dispatch, state, setPlay);
        break;
      case "selection":
        selection(demoBar, dispatch, state, setPlay);
        break;
      case "merge":
        merge_sort(demoBar, dispatch, state, setPlay);
        break;

      default:
        break;
    }
    setReset(true);
  }

  return (
    <div className="closingDiv">
      <div className="barDiv">{generateChart(chart)}</div>
      <button className="btn" onClick={onPlayClick}>
        {play ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default BarChart;
