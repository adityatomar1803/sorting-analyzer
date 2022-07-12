import React, { useContext, useEffect } from "react";
import { ACTION_TYPES } from "../../context/ActionTypes";
import { AppContext } from "../../context/AppProvider";
import { generateNumbers } from "../../Helpers";

export default function SideDrawer() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.NUMBERS,
      payload: generateNumbers(state.range),
    });
  }, [dispatch, state.range]);

  const onRangeChange = (e) => {
    dispatch({ type: ACTION_TYPES.RANGE, payload: e.target.value });
    dispatch({
      type: ACTION_TYPES.NUMBERS,
      payload: generateNumbers(e.target.value),
    });
  };

  const onCategoryChange = (e) => {
    dispatch({ type: ACTION_TYPES.CATEGORY, payload: e.target.value });
  };

  const onSortSelect = (e) => {
    dispatch({ type: ACTION_TYPES.ALGO, payload: e.target.value });
  };

  const onSpeedSelect = (e) => {
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
        max={70}
        value={state.range}
        onChange={(e) => onRangeChange(e)}
      ></input>

      <label htmlFor="category" className="label">
        Category
      </label>

      <select
        id="category"
        name="category"
        className="options"
        value={state.category}
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
        value={
          state.speed === 500
            ? "slow"
            : state.speed === 250
            ? "medium"
            : state.speed === 100
            ? "fast"
            : "ultra-fast"
        }
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
