import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  CHANGE_TODO_COLOR,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const changeTodoColor = (id, color) => ({
  type: CHANGE_TODO_COLOR,
  id,
  color,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const markAsCompleted = (id, isCompleted) => ({
  type: COMPLETE_TODO,
  id,
  isCompleted,
});

export const markAsCompletedAll = () => ({
  type: COMPLETE_ALL_TODOS,
});

export const clearAllCompleted = () => ({
  type: CLEAR_COMPLETED,
});
