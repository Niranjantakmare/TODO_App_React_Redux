import React from "react";
import PropTypes from "prop-types";
const TodoStatus = (props) => {
  return (
    <div className="FilterColors FilterStatus">
      <input type="checkbox" onChange={props.onStatusFilterChange} />
      <label className="statusLabel">{props.status}</label>
    </div>
  );
};

TodoStatus.propTypes = {
  status: PropTypes.string.isRequired,
  onStatusFilterChange: PropTypes.func.isRequired,
};

export default TodoStatus;
