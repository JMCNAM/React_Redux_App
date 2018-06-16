import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
// Dummy reducer
export default combineReducers({
    testReducer: () => null,
    // Piece of state, auth, produced by AuthReducer.
    auth: AuthReducer
});