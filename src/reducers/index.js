import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    // Piece of state, auth, produced by AuthReducer.
    auth: AuthReducer, 
    employeeForm: EmployeeFormReducer 

});