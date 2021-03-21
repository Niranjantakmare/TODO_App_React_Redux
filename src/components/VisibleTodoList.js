import React from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'  
import { toggleTodo } from '../actions/actionCreators';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/actionTypes'

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case SHOW_ALL: 
            return todos;
        case SHOW_ACTIVE: 
            return todos.filter(t => !t.completed);
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default: 
            throw new Error('Unknown filter: ' + filter)    
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)