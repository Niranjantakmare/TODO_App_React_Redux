import React from "react";
import PropTypes from "prop-types";
const ColorFilter = (props) => {
  return (
    <div className="FilterColors">
      <input type="checkbox" onChange={props.onColorFilterChange} />
      <div className="colorInd" style={{ backgroundColor: props.color }}></div>
      <label className="colorLabel">{props.color}</label>
    </div>
  );
};

ColorFilter.propTypes = {
  color: PropTypes.string.isRequired,
  onColorFilterChange: PropTypes.func.isRequired,
};

export default ColorFilter;
