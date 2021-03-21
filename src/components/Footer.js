import React from "react";
import { availableColors, capitalize, StatusFilters } from "../common/filters";
import ColorFilter from "./ColorFilter";
import TodoStatus from "./TodoStatus";
import PropTypes from "prop-types";

const Footer = (props) => {
  const colorFilters = availableColors.map((color, index) => (
    <ColorFilter
      onColorFilterChange={(e) => props.onColorFilterChange(e, color)}
      key={index}
      color={capitalize(color)}
    ></ColorFilter>
  ));

  return (
    <footer className="footer">
      <div className="actions">
        <h6>Actions</h6>
        <button
          onClick={() => props.onActionClicked("markCompleted")}
          className="actionBtn"
        >
          Marks All Completed
        </button>
        <button
          onClick={() => props.onActionClicked("clearCompleted")}
          className="actionBtn"
        >
          Clear Completed
        </button>
      </div>
      <div className="todo-count">
        <h6>Remaining Todos</h6>
        <h6>
          {props.toDoCount} {props.toDoCount > 1 ? "Items" : "Item"} Left
        </h6>
      </div>
      <div className="filters statusFilters">
        <h6>Filter By Status</h6>
        <TodoStatus
          key="0"
          onStatusFilterChange={(e) =>
            props.onStatusFilterChange(e, StatusFilters.All)
          }
          status={capitalize(StatusFilters.All)}
        ></TodoStatus>
        <TodoStatus
          key="1"
          onStatusFilterChange={(e) =>
            props.onStatusFilterChange(e, StatusFilters.Completed)
          }
          status={capitalize(StatusFilters.Completed)}
        ></TodoStatus>
        <TodoStatus
          key="2"
          onStatusFilterChange={(e) =>
            props.onStatusFilterChange(e, StatusFilters.Active)
          }
          status={capitalize(StatusFilters.Active)}
        ></TodoStatus>
      </div>
      <div className="filters colorFilters">
        <h6>Filter By Color</h6>
        {colorFilters}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  onActionClicked: PropTypes.func.isRequired,
  toDoCount: PropTypes.number.isRequired,
  onColorFilterChange: PropTypes.func.isRequired,
  onStatusFilterChange: PropTypes.func.isRequired,
};

export default Footer;
