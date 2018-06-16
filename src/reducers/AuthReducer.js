import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';
// All authentication (email, password, spinner, error) handled here.
const INITIAL_STATE = { 
    email: '', // Cannot return 'undefined', set default state.
    password: ''
}
// Function with 2 args.
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
        // console.log('Action fired.'); // debugging helper.           
            return { ...state, email: action.payload } // Updated state.
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        default:
            return state;
    }
};
