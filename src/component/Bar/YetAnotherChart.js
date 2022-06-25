import { useEffect, useState } from "react";
import { demoBarChart } from "./DemoBarChart";

const YetAnotherChart = ({ demoBar, play }) => {
  console.log("demo bar is ", demoBar);
  const [bar, setbar] = useState(demoBar);

  useEffect(() => {
    setbar(demoBar);
  }, [demoBar]);

  return demoBarChart(bar);
};

export default YetAnotherChart;
