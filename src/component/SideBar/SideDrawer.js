import React, { useContext, useState } from "react";
import { ACTION_TYPES } from "../../context/ActionTypes";
import { AppContext } from "../../context/AppProvider";

export default function SideDrawer() {
  const { state, dispatch } = useContext(AppContext);

  const [sortSelect, setSortSelect] = useState(state.algo);
  const [range, setRange] = useState(state.range);
  const [category, setCategory] = useState(state.category);
  const [speed, setSpeed] = useState(state.speed);

  const onRangeChange = (e) => {
    setRange((prev) => e.target.value);

    dispatch({ type: ACTION_TYPES.RANGE, payload: e.target.value });
  };

  const onCategoryChange = (e) => {
    setCategory((prev) => e.target.value);
    dispatch({ type: ACTION_TYPES.CATEGORY, payload: e.target.value });
  };

  const onSortSelect = (e) => {
    setSortSelect((prev) => e.target.value);
    dispatch({ type: ACTION_TYPES.ALGO, payload: e.target.value });
  };

  const onSpeedSelect = (e) => {
    setSpeed((prev) => e.target.value);
    dispatch({ type: ACTION_TYPES.SPEED, payload: e.target.value });
  };

  return (
    <div id="sidebar">
      <label htmlFor="sorting-algo" className="label">
        Sorting
      </label>

      <select
        id="sorting-algo"
        name="sorting-algo"
        className="options"
        value={sortSelect}
        onChange={(e) => onSortSelect(e)}
      >
        <option value="bubble">Bubble</option>
        <option value="quick">Quick</option>
        <option value="selection">Selection</option>
        <option value="insertion">Insertion</option>
        <option value="merge">Merge</option>
      </select>

      <label htmlFor="range" className="label">
        Range
      </label>
      <input
        type="range"
        id="range"
        name="range"
        min={2}
        value={range}
        onChange={(e) => onRangeChange(e)}
      ></input>

      <label htmlFor="category" className="label">
        Category
      </label>

      <select
        id="category"
        name="category"
        className="options"
        value={category}
        onChange={(e) => onCategoryChange(e)}
      >
        <option value="unsorted">Unsorted</option>
        <option value="nearly-sorted">Nearly Sorted</option>
        <option value="sorted">Sorted</option>
      </select>

      <label htmlFor="speed" className="label">
        Speed
      </label>

      <select
        id="speed"
        name="speed"
        className="options"
        value={speed}
        onChange={(e) => onSpeedSelect(e)}
      >
        <option value="slow">Slow</option>
        <option value="medium">Medium</option>
        <option value="fast">Fast</option>
        <option value="ultra-fast">Ultra Fast</option>
      </select>
    </div>
  );
}
