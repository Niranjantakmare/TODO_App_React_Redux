import { combineReducers } from 'redux'  
import todos from './todos';
import visibilityFilter from './visibility_filters';
  
export default combineReducers({  
  todos,  
  visibilityFilter  
});     