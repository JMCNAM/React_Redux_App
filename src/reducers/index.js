import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'

export default combineReducers({
    // Piece of state, auth, produced by AuthReducer.
    auth: AuthReducer
});