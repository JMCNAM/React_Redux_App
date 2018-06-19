import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from '../actions/types';
// All authentication (email, password, spinner, error) handled here.
const INITIAL_STATE = { 
    email: '', // Cannot return 'undefined', set default state.
    password: '',
    user: null,
    error: '',
    loading: false
}
// Function with 2 args.
export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:       
            return { ...state, email: action.payload } // Updated state.
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER_START:
            return { 
                ...state, 
                loading: true, 
                error: "" 
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state, 
                user: action.payload, 
                error: "", 
                loading: false
            }
        case LOGIN_USER_FAIL:
            return {
                ...state, 
                error: 'Authentication Failed',
                password: "",
                loading: false
            }
        default:
            return state;
    }
};
