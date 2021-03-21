export const availableColors = ["green", "blue", "orange", "purple", "red"];

export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

export const deleteDialogBox = {
  title: "Delete Todo",
  body: "Do you want to delete todo",
  cancelText: "Cancel",
  okText: "Ok",
  open: false,
};

export const getVisibleTodos = (todos, todoFilters) => {
  let filteredTodoList = [...todos];

  const filteredTodoListColorFilter = filteredTodoList.filter((todo) => {
    if (todoFilters.colors.length > 0) {
      return todoFilters.colors.includes(todo.color);
    } else {
      return true;
    }
  });

  filteredTodoList = filteredTodoListColorFilter.filter((todo) => {
    if (todoFilters.status === StatusFilters.Active) {
      return !todo.completed;
    } else if (todoFilters.status === StatusFilters.Completed) {
      return todo.completed ? true : false;
    } else {
      return true;
    }
  });

  return filteredTodoList;
};

export default getVisibleTodos;
