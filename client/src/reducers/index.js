import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});


// function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }