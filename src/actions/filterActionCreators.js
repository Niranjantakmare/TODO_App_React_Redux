import { SET_COLOR_FILTERS, SET_STATUS_FILTERS } from "./actionTypes";

export const addColorfilter = (color) => ({
  type: SET_COLOR_FILTERS,
  color,
});

export const addStatusFilter = (status) => ({
  type: SET_STATUS_FILTERS,
  status,
});
