import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      className={props.classes}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      onKeyDown={props.onKeyDown}
    />
  );
};

Input.propTypes = {
  classes: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
