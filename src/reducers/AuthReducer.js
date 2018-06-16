import { EMAIL_CHANGED } from '../actions/types';
// All authentication (email, password, spinner, error) handled here.
const INITIAL_STATE = { 
    email: '', // Cannot return 'undefined', set default state.
}
// Function with 2 args.
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
        // console.log('Action fired.'); // debugging helper.           
            return { ...state, email: action.payload } // Updated state.
        default:
            return state;
    }
};
