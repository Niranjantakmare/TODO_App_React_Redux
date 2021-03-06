import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import todoFilterReducer from "./todoFilterReducer";

export default combineReducers({
  todos: todoReducer,
  todosFilters: todoFilterReducer,
});
