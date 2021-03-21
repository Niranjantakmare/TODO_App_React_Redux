import React from "react";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoListItem = (props) => {
  return (
    <li className="">
      <div className="view">
        <div className="toggle" onClick={props.onStatusClicked}>
          {props.completed ? (
            <CheckCircleIcon
              style={{
                height: "60px",
                color: "green",
                fontSize: "2rem",
              }}
            ></CheckCircleIcon>
          ) : (
            <CheckCircleOutlineIcon
              style={{
                height: "60px",
                fontSize: "2rem",
              }}
            ></CheckCircleOutlineIcon>
          )}
        </div>
        <label style={{ color: props.color }}>{props.todoText}</label>
        <select
          className="colorPicker"
          value={props.color}
          onChange={props.handleColorChanged}
        >
          <option value="">Select Color</option>
          {props.colorOptions}
        </select>
        <div onClick={props.deleteTodo} className="remove">
          <DeleteIcon></DeleteIcon>
        </div>
        {/* 
        <button onClick={props.deleteTodo} className="remove"></button> */}
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  todoText: PropTypes.string.isRequired,
  color: PropTypes.string.option,
  handleColorChanged: PropTypes.func.isRequired,
  colorOptions: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onStatusClicked: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoListItem;
