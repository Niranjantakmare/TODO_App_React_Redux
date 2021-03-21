import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className={props.classes} onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
