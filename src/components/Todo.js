import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
    return (
        <li onClick={props.onClick} 
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
            {props.text}
        </li>
    );
}

Todo.prototype = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;