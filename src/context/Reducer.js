import { ACTION_TYPES } from "./ActionTypes";
import { INITIAL_STATE } from "./InitialState";

export const Reducer = (state = INITIAL_STATE, action) => {
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
      return {
        ...state,
        speed:
          action.payload === "slow"
            ? 500
            : action.payload === "medium"
            ? 250
            : action.payload === "fast"
            ? 100
            : 25,
      };

    case ACTION_TYPES.NUMBERS:
      return { ...state, numbers: action.payload };

    default:
      return state;
  }
};
