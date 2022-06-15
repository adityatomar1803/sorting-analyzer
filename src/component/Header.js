import React, { useContext, useState } from "react";
import logo from "../icon/logo.PNG";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { AppContext } from "../context/AppProvider";
import { ACTION_TYPES } from "../context/ActionTypes";

export default function Header() {
  const { state, dispatch } = useContext(AppContext);
  const [theme, setTheme] = useState(state.blackTheme);

  function onThemeSelect() {
    setTheme((prev) => !prev);
    dispatch({ type: ACTION_TYPES.THEME, payload: !theme });
  }

  return (
    <div>
      <ul>
        <li>
          <img src={logo} alt="logo" height={20} />
        </li>
        <li> Sorting </li>
        <li onClick={onThemeSelect}>{theme ? <BsMoonFill /> : <BsMoon />} </li>
      </ul>
    </div>
  );
}
