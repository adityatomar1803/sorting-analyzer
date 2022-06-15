import { ACTION_TYPES } from "./ActionTypes";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.THEME:
      return { ...state, blackTheme: action.payload };

    case ACTION_TYPES.ALGO:
      return { ...state, algo: action.payload };

    case ACTION_TYPES.RANGE:
      return { ...state, range: action.payload };

    case ACTION_TYPES.CATEGORY:
      return { ...state, category: action.payload };

    case ACTION_TYPES.SPEED:
      return { ...state, speed: action.payload };

    default:
      return state;
  }
};
