import React, { useState } from "react";
import Input from "../common/Input";
import TodoList from "./TodoList";
import Footer from "../components/Footer";
import { StatusFilters, getVisibleTodos } from "../common/filters";
import { connect } from "react-redux";
import {
  addTodo,
  changeTodoColor,
  deleteTodo,
  markAsCompleted,
  clearAllCompleted,
  markAsCompletedAll,
} from "../actions/todoActionCreators";
import {
  addColorfilter,
  addStatusFilter,
} from "../actions/filterActionCreators";
import PropTypes from "prop-types";

// const todoAppState = {
//   todos: [
//     { id: 0, text: "Learn React", completed: true },
//     { id: 1, text: "Learn Redux", completed: false, color: "purple" },
//     { id: 2, text: "Build something fun!", completed: false, color: "blue" },
//   ],
//   filters: {
//     status: "",
//     colors: [],
//   },
// };
const Todo = (props) => {
  // let [todos, updateTodos] = useState(todoAppState.todos);
  // let [filteredTodos, updateFilterTodos] = useState(todoAppState.todos);
  // let [filters, setFilters] = useState(todoAppState.filters);

  let [newTodo, setTodo] = useState("");

  // useEffect(() => {
  //   todosFilter();
  // }, [filters, todos, newTodo]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(e);
      // const latestId = todos.reduce((acc, item) => {
      //   if (acc < item.id) {
      //     return item.id;
      //   }
      //   return acc;
      // }, 0);
      // const newTodoList = [
      //   ...todos,
      //   {
      //     id: latestId + 1,
      //     text: e.target.value,
      //     completed: false,
      //   },
      // ];
      // updateTodos(newTodoList);
      props.addTodo(e.target.value);
      setTodo("");
    }
  };

  const onTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const deleteTodo = (id) => {
    // const updatedTodos = todos.filter((todo) => {
    //   if (todo.id === id) {
    //     return false;
    //   }
    //   return true;
    // });
    // updateTodos(updatedTodos);
    // todosFilter();
    props.deleteTodo(id);
  };

  const handleColorChanged = (id, color) => {
    // const updatedTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.color = color;
    //   }
    //   return todo;
    // });
    // updateTodos(updatedTodos);
    props.changeTodoColor(id, color);
  };

  const onStatusClicked = (id, isCompleted) => {
    // const updatedTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.completed = isCompleted;
    //   }
    //   return todo;
    // });
    // updateTodos(updatedTodos);
    props.markAsCompleted(id, isCompleted);
  };

  const onStatusFilterChange = (e, status) => {
    // setFilters({
    //   ...filters,
    //   status: e.target.checked ? status : StatusFilters.All,
    // });
    props.setStatusFilter(e.target.checked ? status : StatusFilters.All);
  };

  const onColorFilterChange = (e, color) => {
    // let newColorArr = [...filters.colors];
    // const index = newColorArr.indexOf(color);
    // if (index > -1) {
    //   newColorArr.splice(index, 1);
    //   setFilters({
    //     ...filters,
    //     colors: newColorArr,
    //   });
    // } else {
    //   setFilters({
    //     ...filters,
    //     colors: [...filters.colors, color],
    //   });
    // }
    props.setColorFilter(color);
  };

  // const todosFilter = () => {
  //   let filteredTodoList = [...todos];
  //   if (filters.colors.length > 0) {
  //     filteredTodoList = filteredTodoList.filter((todo) =>
  //       filters.colors.includes(todo.color)
  //     );
  //   }
  //   filteredTodoList = filteredTodoList.filter((todo) => {
  //     if (filters.status === StatusFilters.Active) {
  //       return !todo.completed;
  //     } else if (filters.status === StatusFilters.Completed) {
  //       return todo.completed ? true : false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   // updateFilterTodos(filteredTodoList);
  // };

  const onActionClicked = (action) => {
    if (action === "markCompleted") {
      // const updatedTodos = todos.map((todo) => {
      //   todo.completed = true;
      //   return todo;
      // });
      // updateTodos(updatedTodos);
      props.markAsCompletedAll();
    } else if (action === "clearCompleted") {
      // const updatedTodos = todos.filter((todo) => !todo.completed);
      // updateTodos(updatedTodos);
      props.clearAllCompleted();
    }
    // todosFilter();
  };

  return (
    <div>
      <div className="todoInput">
        <Input
          key="1"
          classes="new-todo"
          onChange={onTodoChange}
          onKeyDown={onKeyDown}
          placeholder="What needs to be done?"
          value={newTodo}
        ></Input>
        <span>
          <input className="toggle-all" type="checkbox" readOnly="" />
          <label></label>
        </span>
      </div>
      <section className="main">
        <TodoList
          toDoList={props.filteredTodos}
          handleColorChanged={(id, color) => handleColorChanged(id, color)}
          onStatusClicked={(id, isCompleted) =>
            onStatusClicked(id, isCompleted)
          }
          deleteTodo={(id) => deleteTodo(id)}
        ></TodoList>
      </section>
      <Footer
        onStatusFilterChange={(e, status) => onStatusFilterChange(e, status)}
        onColorFilterChange={(e, color) => onColorFilterChange(e, color)}
        toDoCount={props.filteredTodos.length}
        onActionClicked={(action) => onActionClicked(action)}
      ></Footer>
    </div>
  );
};
// export default Todo;

const mapStateToProps = (state) => ({
  filteredTodos: getVisibleTodos(state.todos, state.todosFilters),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    changeTodoColor: (id, color) => dispatch(changeTodoColor(id, color)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    markAsCompleted: (id, isCompleted) =>
      dispatch(markAsCompleted(id, isCompleted)),
    markAsCompletedAll: () => dispatch(markAsCompletedAll()),
    clearAllCompleted: () => dispatch(clearAllCompleted()),
    setColorFilter: (color) => dispatch(addColorfilter(color)),
    setStatusFilter: (status) => dispatch(addStatusFilter(status)),
  };
};

Todo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  changeTodoColor: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markAsCompleted: PropTypes.func.isRequired,
  markAsCompletedAll: PropTypes.func.isRequired,
  clearAllCompleted: PropTypes.func.isRequired,
  setColorFilter: PropTypes.func.isRequired,
  setStatusFilter: PropTypes.func.isRequired,
  filteredTodos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
