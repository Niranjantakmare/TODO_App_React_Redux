import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props);
    return (
        <ul>
            {
            props.todos &&  props.todos.map((todo, index) => {
                return (<Todo key={index} {...todo} onClick={() => props.toggleTodo(index)}></Todo>)
            })
            }
        </ul>
    );
}

TodoList.propTypes = {  
    todos: PropTypes.arrayOf(  
      PropTypes.shape({  
        id: PropTypes.number.isRequired,  
        completed: PropTypes.bool.isRequired,  
        text: PropTypes.string.isRequired  
      }).isRequired  
    ).isRequired,  
    onTodoClick: PropTypes.func.isRequired  
}  

export default TodoList;
