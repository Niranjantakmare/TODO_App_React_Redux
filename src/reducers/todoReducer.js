import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_TODO_COLOR,
  COMPLETE_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL_TODOS,
} from "../actions/actionTypes";

const todoAppState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

const todoReducer = (state = todoAppState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
          completed: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);
    case CHANGE_TODO_COLOR:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, color: action.color } : todo
      );
    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: action.isCompleted }
          : todo
      );
    case COMPLETE_ALL_TODOS:
      return state.map((todo) => ({ ...todo, completed: true }));
    case CLEAR_COMPLETED:
      return state.map((todo) => ({ ...todo, completed: false }));
    default:
      return state;
  }
};

export default todoReducer;
