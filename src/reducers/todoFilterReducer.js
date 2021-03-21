import { SET_COLOR_FILTERS, SET_STATUS_FILTERS } from "../actions/actionTypes";

const todoFilters = {
  status: "",
  colors: [],
};

const todoFilterReducer = (state = todoFilters, action) => {
  switch (action.type) {
    case SET_COLOR_FILTERS:
      return {
        ...state,
        colors:
          state.colors.indexOf(action.color) > -1
            ? state.colors.filter((item) => item !== action.color)
            : [...state.colors, action.color],
      };
    case SET_STATUS_FILTERS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default todoFilterReducer;
