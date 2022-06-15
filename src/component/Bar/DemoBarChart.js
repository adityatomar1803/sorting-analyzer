import React from "react";

function numbers(j) {
  var s = [];
  for (let i = 0; i < j; i++) {
    s.push(Math.random() * 350);
  }

  return s;
}

export function demoBarChart(range) {
  let nums = numbers(range);

  const final = [];

  nums.map((item, index) => {
    final.push(
      <div className="scraper" key={index} style={{ height: item }}></div>
    );
  });

  return final;
}
