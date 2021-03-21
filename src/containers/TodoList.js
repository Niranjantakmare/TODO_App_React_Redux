import React from "react";
import TodoListItem from "../components/TodoListItem";
import {
  availableColors,
  capitalize,
  deleteDialogBox,
} from "../common/filters";
import DialogBox from "../common/DialogBox";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const [open, setOpen] = React.useState(false);
  const [itemId, setItemId] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    props.deleteTodo(itemId);
    setOpen(false);
  };

  const colorOptions = availableColors.map((color) => (
    <option key={color} value={color}>
      {capitalize(color)}
    </option>
  ));
  const toDoList = props.toDoList.map((item) => (
    <TodoListItem
      key={item.id}
      todoText={item.text}
      color={item.color}
      colorOptions={colorOptions}
      completed={item.completed}
      availableColors={availableColors}
      deleteTodo={() => {
        setOpen(true);
        setItemId(item.id);
      }}
      handleColorChanged={(e) => {
        props.handleColorChanged(item.id, e.target.value);
      }}
      onStatusClicked={() => {
        props.onStatusClicked(item.id, !item.completed);
      }}
    ></TodoListItem>
  ));
  return (
    <>
      <ul className="todo-list">{toDoList}</ul>
      <DialogBox
        {...deleteDialogBox}
        open={open}
        handleClose={handleClose}
        handleOk={handleOk}
      ></DialogBox>
    </>
  );
};

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toDoList: PropTypes.array.isRequired,
  handleColorChanged: PropTypes.func.isRequired,
  onStatusClicked: PropTypes.func.onStatusClicked,
};

export default TodoList;
